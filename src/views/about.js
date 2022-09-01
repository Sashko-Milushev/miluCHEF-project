import { html } from '../../lib.js'

const aboutTemplate = () => html`
    <section id="about">
        <h1>
            Here is information about me
        </h1>

    </section>
`

export function aboutView(ctx) {
    ctx.render(aboutTemplate())
}