const excusesDiv = document.getElementById('excuses');

function checkTime() {
    const now = new Date();
    const then = new Date(Date.parse('05 Aug 2022 21:00:00 CST'));
    const diff = now - then;

    // Convert milliseconds to time units
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);

    const timeUnits = [
        { value: years, singular: 'year', plural: 'years' },
        { value: months, singular: 'month', plural: 'months' },
        { value: days % 30, singular: 'day', plural: 'days' },
        { value: hours, singular: 'hour', plural: 'hours' },
        { value: minutes, singular: 'minute', plural: 'minutes' },
        { value: seconds, singular: 'second', plural: 'seconds' },
    ];

    const timerString = timeUnits
        .filter((unit) => unit.value > 0)
        .map((unit, index, array) => {
            const isLast = index === array.length - 1;
            const isSecondToLast = index === array.length - 2;
            const value = unit.value;
            const label = value === 1 ? unit.singular : unit.plural;

            return isLast
                ? `${value} ${label}`
                : isSecondToLast
                ? `${value} ${label}, and `
                : `${value} ${label}, `;
        })
        .join('');

    document.getElementById('creationTimer')?.innerHTML = timerString;
}

function randomExcuse() {
    const excuses = [
        'a break in the space-time continuum',
        'a murder mystery gone horribly wrong',
        'hijinks involving a zebra, tap-dancing monks, and canned peaches',
        'the season finale of the award-winning Westworld',
        'a suprising amount of kitchen knives',
        'integration hell',
        'entering the rabbit hole of an endless spreadsheet',
        "reminiscing with friends about the good ol' days",
        'the troll under the bridge',
        'shenanigans, tomfoolery and even horseplay',
        'a blatent disregard of the rules',
        'a subversion of social dogma',
        'poor decision-making skills',
        'a particularly intense game of apples to apples',
        'a lack of plausable deniablity',
        "a dazzling rendition of Don't Stop Believing",
        'finding common ground on loving pistachio crumbles',
        'a rad picture of a dog on a skateboard',
        'the implications',
        'technical difficulties',
        'human error',
        'traffic on the route 99',
        "an advanced screening of Jordan Peele's next movie",
        'a scenario where I have to pretend to be at two events at once',
        'accidental invovlement as the enwisened side charecter in a Rom-Com',
        'a tragic case of an ill timed IBS attack',
        'Jury Duty',
        "a horrible misunderstanding of the definition of 'suffrage'",
        'a flare-up of antidisestablishmentarianism',
        'the fourth defenestration of Prague',
        'speaking truth to power',
        'seeing how the sausage is made',
    ];
    excusesDiv.innerHTML =
        excuses[Math.round((excuses.length - 1) * Math.random())];
}

setInterval(checkTime);
randomExcuse();
excusesDiv.addEventListener('click', randomExcuse);
