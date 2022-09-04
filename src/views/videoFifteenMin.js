import { html } from '../../lib.js'

const videoFifteenlTemplate = () => html`
    <section id="fifteen-minutes">
        <h1>
            Fifteen minute videos
        </h1>

    </section>
`

export function videoFifteenlView(ctx) {
    ctx.render(videoFifteenlTemplate())
}