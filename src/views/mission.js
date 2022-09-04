import { html } from '../../lib.js'

const missionTemplate = () => html`
    <section id="mission">
        <h1>
            My mission
        </h1>

    </section>
`

export function missionView(ctx) {
    ctx.render(missionTemplate())
}