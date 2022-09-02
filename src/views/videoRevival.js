import { html } from '../../lib.js'

const videoRevivalTemplate = () => html`
    <section id="revival">
        <h1>
            Revival video recipies
        </h1>

    </section>
`

export function videoRevivalView(ctx) {
    ctx.render(videoRevivalTemplate())
}