// SVGs are just XML, basically
// I wanted to make more realistic fake images....
// ...but Math is hard

function r1() {
    return 250 - Math.round(Math.random() * 490)
}

function randomSVG() {
    let delta = "M 250 250 "
    for (let i = 0; i < 20; i++) {
        delta += `h ${r1()} v ${r1()} `
    }
    delta += " Z"

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <path
                d={delta}
                fill="url(&quot;#lg&quot;)"
                strokeWidth="25"
                stroke="url(&quot;#lg&quot;)"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="lg">
                    <stop stopColor="hsl(255, 55%, 30%)" offset="0" />
                    <stop stopColor="hsl(255, 55%, 60%)" offset="1" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default randomSVG