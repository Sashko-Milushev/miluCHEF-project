import { page, render } from './lib.js';
import { homeView } from './src/views/home.js';
import { contactView } from './src/views/contact.js';
import { aboutView } from './src/views/about.js';
import { missionView } from './src/views/mission.js';
import { videoRevivalView } from './src/views/videoRevival.js';
import { videoJokersView } from './src/views/videoQuckJokers.js';
import { videoFifteenlView } from './src/views/videoFifteenMin.js';
import { saladsView } from './src/views/salads.js';
import { vegiterianView } from './src/views/vegiterian.js';
import { meatAndFishView } from './src/views/meatAndFish.js';
import { bakedAndSweetsView } from './src/views/bakedAndSweets.js';
import { conservationView } from './src/views/conservation.js';
import { drinksView } from './src/views/drinks.js';

const main = document.querySelector('main');
page(decorateContext);


page('/', homeView)
page('/video-revival', videoRevivalView)
page('/video-quick-ideas', videoJokersView)
page('/video-15-min', videoFifteenlView)
page('/salads', saladsView)
page('/vegiterian', vegiterianView)
page('/meat-and-fish', meatAndFishView)
page('/baked-and-sweets', bakedAndSweetsView)
page('/conservation', conservationView)
page('/drinks', drinksView)
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
