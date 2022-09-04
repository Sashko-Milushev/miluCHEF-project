import { html } from '../../lib.js'

const videoJokersTemplate = () => html`
    <section id="jokers">
        <h1>
            Quick jokers video recipes
        </h1>

    </section>
`

export function videoJokersView(ctx) {
    ctx.render(videoJokersTemplate())
}