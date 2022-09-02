import { html } from '../../lib.js'

const videoTemplate = () => html`
    <section id="home">
        <h1>
            Videos
        </h1>

    </section>
`

export function videoView(ctx) {
    ctx.render(videoTemplate())
}