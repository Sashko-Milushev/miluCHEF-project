import { page, render } from './lib.js';
import { homeView } from './src/views/home.js';
import { contactView } from './src/views/contact.js';
import { aboutView } from './src/views/about.js';
import { recipesView } from './src/views/recipes.js';
import { missionView } from './src/views/mission.js';
import { videoView } from './src/views/video.js';

const main = document.querySelector('main');
page(decorateContext);


page('/', homeView)
page('/video', videoView)
page('/recipes', recipesView)
page('/about', aboutView)
page('/mission', missionView)
page('/contact', contactView)

page.start()
page.redirect('/')


function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next()
}

function renderMain(templateResult) {
    render(templateResult, main)
}
