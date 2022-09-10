import { html } from '../../lib.js'

const saladsTemplate = () => html`
    <section id="salads">
        <h1>
            Render salads
        </h1>

    </section>
`

export function saladsView(ctx) {
    ctx.render(saladsTemplate())
}