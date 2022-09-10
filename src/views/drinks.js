import { html } from '../../lib.js'

const drinksTemplate = () => html`
    <section id="drinks">
        <h1>
            Render drinks
        </h1>

    </section>
`

export function drinksView(ctx) {
    ctx.render(drinksTemplate())
}