var str = "<p>We tried a lot to understand how the federal reserve works, the imf, the world bank, still pretty sure most of us can&rsquo;t get our head around it. And you all are not even open about it man, atleast be consistent with the lies and stuff. Its pretty fucked up for most of us out here, kinda people dying of hunger and shit. It seems that you all don&rsquo;t care anyomore :( So we decided to not follow you or your money. You keep it with you, we don&rsquo;t want any of it :) For us WTF is money, coz we really don&rsquo;t wanna fuck with you. We don&rsquo;t really care about how you spell money, for us it is a way to get paid and spend on the things we love. Now we don&rsquo;t care if this so called money is rocks/coins/code, we just want it to be exchangeable for food and other shit. Thats it bro. We need that, so we built that. Now you do you bitches, because WTF IS MONEY AND WE DONT FUCK WITH YOU. Chief. rosh/light</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());