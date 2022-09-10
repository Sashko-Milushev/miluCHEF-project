import { html } from '../../lib.js'

const vegiterianTemplate = () => html`
    <section id="vegiterian">
        <h1>
            Render vegi
        </h1>

    </section>
`

export function vegiterianView(ctx) {
    ctx.render(vegiterianTemplate())
}