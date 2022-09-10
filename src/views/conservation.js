import { html } from '../../lib.js'

const conservationTemplate = () => html`
    <section id="conservation">
        <h1>
            Render conservation
        </h1>

    </section>
`

export function conservationView(ctx) {
    ctx.render(conservationTemplate())
}