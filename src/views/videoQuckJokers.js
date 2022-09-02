import { html } from '../../lib.js'

const videoJokersTemplate = () => html`
    <section id="revival">
        <h1>
            Quick jokers video recipes
        </h1>

    </section>
`

export function videoJokersView(ctx) {
    ctx.render(videoJokersTemplate())
}