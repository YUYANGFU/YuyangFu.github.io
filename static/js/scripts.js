const content_dir = 'contents/';
const section_names = ['home', 'education', 'experience', 'publications', 'research', 'awards'];

async function fetchText(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Could not load ' + path + ': ' + response.status);
    return response.text();
}

window.addEventListener('DOMContentLoaded', async () => {
    const navPanel = document.getElementById('navbarResponsive');
    const navToggler = document.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navToggler).display !== 'none') {
                bootstrap.Collapse.getOrCreateInstance(navPanel, { toggle: false }).hide();
            }
        });
    });

    const configReady = fetchText(content_dir + 'config.yml')
        .then(text => {
            const config = jsyaml.load(text);
            Object.entries(config).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (element) element.innerHTML = value;
            });
        })
        .catch(error => console.error(error));

    marked.use({ mangle: false, headerIds: false });
    await Promise.all(section_names.map(async name => {
        const target = document.getElementById(name + '-md');
        try {
            const markdown = await fetchText(content_dir + name + '.md');
            target.innerHTML = marked.parse(markdown);
        } catch (error) {
            const message = document.createElement('p');
            message.className = 'content-error';
            message.textContent = 'This section could not be loaded. Please reload the page.';
            target.replaceChildren(message);
            console.error(error);
        }
    }));
    await configReady;

    const scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 100 });
    scrollSpy.refresh();
    const destination = document.getElementById(window.location.hash.slice(1));
    if (destination) destination.scrollIntoView({ behavior: 'instant' });

    if (window.MathJax?.startup?.promise) {
        try {
            await MathJax.startup.promise;
            await MathJax.typesetPromise();
            scrollSpy.refresh();
        } catch (error) {
            console.error(error);
        }
    }

});
