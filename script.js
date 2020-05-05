let styles=["Jazz","Blues"]
alert(styles);

styles.push("Rock-n-Roll");
alert(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles);

alert( styles.shift() );

styles.unshift("Rap", "Reggae");
alert(styles);
