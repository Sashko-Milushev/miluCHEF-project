import { html } from '../../lib.js'

const bakedAndSweetsTemplate = () => html`
    <section id="bakedAndSweets">
        <h1>
            Render bakedAndSweets
        </h1>

    </section>
`

export function bakedAndSweetsView(ctx) {
    ctx.render(bakedAndSweetsTemplate())
}