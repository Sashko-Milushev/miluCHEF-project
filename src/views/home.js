import { html } from '../../lib.js'

const homeTemplate = () => html`
    <section id="home">
        <h1>
            HOME
        </h1>

    </section>
`

export function homeView(ctx) {
    ctx.render(homeTemplate())
}