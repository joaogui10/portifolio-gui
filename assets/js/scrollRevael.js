export function initsScrollReveal(){
    const sr = ScrollReveal({
        origin:"top",
        distance:"50px",
        duraction: 2000,

    });

sr.reveal(".delaySmallReveal", {delay:200});
sr.reveal(".delayMediumReveal", {delay: 300});
sr.reveal(".delayLargeReveal", { delay:400});
sr.reveal(".dealayExtraBigReveal", {delay:600});
sr.reveal(".intervalCardReveal", { interval: 400});

}