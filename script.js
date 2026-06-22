const noButton = document.getElementById("no");

const warnings = [
"Nice try 😏",
"Friendship Protection Activated 🚨",
"Deleting friendship is a premium feature.",
"Request denied by Friendship Department.",
"Error 404: Friendship Lost.",
"Consulting common sense...",
"Please reconsider your life choices 😂",
"This option is currently under maintenance.",
"Loading emotional damage...",
"System recommends keeping this idiot as a friend."
];

noButton.addEventListener("mouseover", () => {

    let x = Math.random() * (window.innerWidth - 150);

    let y = Math.random() * (window.innerHeight - 80);

    noButton.style.left = x + "px";

    noButton.style.top = y + "px";

    let randomMessage =
    warnings[Math.floor(Math.random() * warnings.length)];

    document.getElementById("warning").innerText =
    randomMessage;

});

function continueFriendship(){

    document.body.innerHTML = `

    <div style="text-align:center;
    margin-top:150px;
    color:white;
    font-family:Arial;">

    <h1>Congratulations 🎉</h1>

    <h2>Friendship Contract Extended Successfully 🤝</h2>

    <br>

    <p>
    Benefits include:
    </p>

    <p>✓ Unlimited bad jokes</p>

    <p>✓ Free technical support</p>

    <p>✓ Occasional apologies</p>

    <p>✓ A friend who still values this friendship</p>

    <br>

    <p>
    In all seriousness, take all the time you need.
    I know I made mistakes, but I hope one day we'll laugh about this website.
    </p>

    </div>

    `;
}
