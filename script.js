function showMessage(choice){

document.getElementById("buttons").style.display = "none";

let text = "";

if(choice==1){

text = `
I know I made mistakes, and I understand that my actions hurt you.

I am not trying to justify myself or ask for immediate forgiveness.

I only wanted to acknowledge where I was wrong and sincerely apologize.

I respect your feelings and understand if you need time.
`;

}

if(choice==2){

text = `
This experience taught me many things.

It made me understand the importance of trust, words, and actions.

I realized that friendships should never be taken for granted.

I have learned from my mistakes and hope to become a better person because of them.
`;

}

if(choice==3){

text = `
Despite everything that happened, I want to thank you wholeheartedly.

Thank you for the conversations, the memories, the laughter, and the moments that made our friendship special.

I remain grateful for having known you and for the friendship we shared.

Some memories are valuable not because they last forever, but because they once brought happiness.

And for that, I will always be thankful.
`;

}

if(choice==4){

text = `
I don't want this to be a goodbye.

I understand that I made mistakes and that some wounds need time to heal.

I am not expecting things to become normal immediately.

All I hope is that, whenever you feel ready, there might still be a place for our friendship again.

Until then, I will respect your space and wish you nothing but peace, happiness, and success.

Take care, Keerthana.
`;

}

document.getElementById("message").innerText = text;

}
