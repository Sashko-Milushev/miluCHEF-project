import { page, render } from './lib.js';
import { homeView } from './src/views/home.js';

const main = document.querySelector('main');
page(decorateContext);

page('/', homeView)
// page('/video', VideoView)
// page('/recipes', recipesView)
// page('/about', aboutView)
// page('/mission', missionView)
// page('/contact', contactView)

page.start()

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next()
}

function renderMain(templateResult) {
    render(templateResult, main)
}
