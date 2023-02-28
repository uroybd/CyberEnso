const POEMS = [
  {
    title: "",
    author: "Han Shan",
    lines: [
      "I STAND here and watch the people of this world:",
      "all against one and one against all,",
      "angry, arguing, plotting and scheming.",
      "Then one day, suddenly, they die.",
      "And each gets one plot of ground:",
      "four feet wide, six feet long.",
      "If you can scheme your way out of that plot,",
      "I’ll set the stone that immortalizes your name",
    ],
  },

  {
    title: "",
    author: "Han Shan",
    lines: [
      "I laugh at what he calls poetry: a blind man’s",
      "rhymes in lukewarm praise of the sun.",
    ],
  },

  {
    title: "",
    author: "Han Shan",
    lines: [
      "MY heart’s like the autumn moon,",
      "reflecting from the clear pure waters of the pool.",
      "There’s nothing to compare:What can I say?",
    ],
  },
  {
    title: "",
    author: "Han Shan",
    lines: [
      "EAST of me, the old lady",
      "Got rich three or four years ago.",
      "Used to be poorer than me,",
      "Now she laughs that I don’t have money.",
      "She laughs that I’ve fallen behind.",
      "I laugh that she’s gotten ahead.",
      "Both of us laughing, no stopping us.",
      "East, and West.",
    ],
  },

  {
    title: "Shih Te",
    author: "Han Shan",
    lines: [
      "MY poems are poems;",
      "some people call them sermons.",
      "Well, poems and sermons share one thing:",
      "when you read them you’ve got to be careful.",
      "Keep at it. Get into detail.",
      "Don’t just claim they’re easy.",
      "If you were to live your life like that,",
      "a lot of funny things might happen.",
    ],
  },
  {
    title: "",
    author: "Li Po",
    lines: [
      "Zazen on Ching-t’ing Mountain",
      "THE birds have vanished from the sky.",
      "Now the last cloud drains away.",
      "We sit together, the mountain and me,",
      "until only the mountain remains.",
    ],
  },
  {
    title: "To Magistrate Chang",
    author: "Wang Wei",
    lines: [
      "LATE, I love but quietness:",
      "things of this world are no more my concern.",
      "Looking back, I’ve known no better plan",
      "than this: returning to the grove.",
      "Pine breezes loosen my robe.",
      "Mountain moonbeams play my lute.",
      "What, you ask, is Final Truth?",
      "The fisherman’s song strikes deep into the bank.",
    ],
  },
  {
    title: "Inscribed on the Wall of the Hut by the Lake",
    author: "Chiao Jan",
    lines: [
      "IF you want to be a mountain-dweller . . .",
      "no need to trek to India to find one.",
      "I have a thousand peaks",
      "to pick from right here on the lake.",
      "Fragrant grasses and white cloudshold me here.",
      "What holds you there,",
      "world-dweller?",
    ],
  },
  {
    title: "After Reading Lao Tzu",
    author: "Po Chu-i",
    lines: [
      "“ONE who speaks does not know; one who knows does not speak.”",
      "Thus I have been instructed by the Old Master.",
      "If you tell me the Old Master was one who knew, I ask,",
      "Why did he write five thousand words to explain it?",
    ],
  },
  {
    title: "Parting with the Monk Ho-lan",
    author: "Wu Pen (Chia Tao)",
    lines: [
      "WILD monk, come to make a parting with me.",
      "We sit a while on the sand beside the welling source.",
      "You’ll go a long way on that empty alms bowl,",
      "deep among mountains, treading fallen flowers.",
      "Masterless Ch’an, our own understanding?",
      "When you’ve got it, there’s no place for it but a poem.",
      "This parting’s nothing fated:",
      "orphan clouds just never settle down.",
    ],
  },
  {
    title: "The Swordsman",
    author: "Wu Pen (Chia Tao)",
    lines: [
      "TEN long years I’ve honed this sword:",
      "its frost white blade is yet untried.",
      "Today, like any other gentleman,",
      "it’s looking for injustice.",
    ],
  },
  {
    title: "",
    author: "Anonymous Sung Dynasty Nun",
    lines: [
      "SEARCHING for spring all day, I never saw it,",
      "straw sandals treading everywhere",
      "among the clouds, along the bank.",
      "Coming home, I laughed, catching",
      "the plum blossom’s scent:",
      "spring at each branch tip, already perfect.",
    ],
  },
  {
    title: "Written to the Tune of “An Immortal Approaching the River”",
    author: "Su Tung-p’o",
    lines: [
      "WINE at East Bank tonight, sobered up",
      "then started over, getting drunk again.",
      "Got home, a little fuzzy, maybe close to three,",
      "and the houseboy was snoring like thunder.",
      "I knocked at my gate, but nobody answered.",
      "I leaned on my cane and listened to the river.",
      "I hate it!—that even this body’s not mine alone . . .",
      "Someday I’ll give it all up.",
      "The night moves, the breeze writes",
      "quietly in ripples on the water.",
      "A little boat, leaving here and now,",
      "the rest of my life on the river, on the sea.",
    ],
  },
  {
    title: "Wandering Late at Kulin Temple",
    author: "Yuan Mei",
    lines: [
      "THE single sound of the bell",
      "brings out the whole hall’s monks.",
      "Golden glint of the Buddha’s face",
      "almost the flash of a lamp.",
      "The bodhisattva Dragon Tree is silent,",
      "the wind has died away . . .",
      "The robes of the monks cast shadows",
      "as the moon begins to rise.",
      "No need to chant to sutrasto make the flowers giggle . . .",
      "As I lean and listen carefully,",
      "even the stones respond.",
      "How can the Buddha, King of Emptiness,",
      "boast of setting the whole world free?",
      "Here, when spring comes,",
      "he hasn’t freed even half this pond",
      "from thinking long on love.",
    ],
  },
  {
    title: "On the Road to T’ien-t’ai",
    author: "Yuan Mei",
    lines: [
      "WRAPPED, surrounded by ten thousand mountains,",
      "cut off, no place to go . . .",
      "Until you’re here, there’s no way to get here.",
      "Once you’re here, there’s no way to go.",
    ],
  },
  {
    title: "",
    author: "Saigyō",
    lines: [
      "I’D like to divide",
      "myself in order to see,",
      "among these mountains,",
      "each and every flower",
      "of every cherry tree",
    ],
  },
  {
    title: "",
    author: "Saigyō",
    lines: [
      "THIS loneliness is",
      "not simply the result",
      "of autumn colors—",
      "even mountain evergreens make",
      "me feel like autumn evening",
    ],
  },
  {
    title: "",
    author: "Fujiwara no Ietaka",
    lines: [
      "EVERYTHING must end.",
      "Thus the day tries to begin",
      "with the morning bell.",
      "But the long night remains,",
      "empty moon still in the sky.",
    ],
  },
  {
    title: "",
    author: "The Priest Jakuren",
    lines: [
      "CALL it loneliness,",
      "that deep, beautiful color",
      "no one can describe:",
      "over these dark mountains,",
      "the gathering autumn dusk.",
    ],
  },
  {
    title: "",
    author: "Asukai Masatsune",
    lines: [
      "I WALKED among stones",
      "through mountains of mountains,",
      "paying no mind",
      "until the flower-trail behind",
      "turned into drifting white clouds.",
    ],
  },
  {
    title: "",
    author: "Dōgen Kigen",
    lines: [
      "EVEN without hearts",
      "and minds, plants wither",
      "with the passing days.",
      "Seeing just how this is so,",
      "we feel a little ashamed.",
    ],
  },
  {
    title: "",
    author: "Dōgen Kigen",
    lines: [
      "CAST away all speech.",
      "Our words may express it,",
      "but cannot hold it.",
      "The way of letters leaves no trace,",
      "yet the teaching is revealed.",
    ],
  },
  {
    title: "",
    author: "Kōhō Kennichi",
    lines: [
      "HERE in a thatched hut",
      "hidden among mountain peaks,",
      "with barely room for one,",
      "I’m suddenly invaded",
      "by wandering white clouds.",
    ],
  },
  {
    title: "",
    author: "Emperor Fushima",
    lines: [
      "ONLY now I know",
      "that power—greater than storms—",
      "a heart-rending awe",
      "silencing all the pine",
      "sat nightfall on the mountain.",
    ],
  },
  {
    title: "",
    author: "Ikkyū Sōjun",
    lines: [
      "LIKE vanishing dew,",
      "a passing apparition",
      "or the sudden flash",
      "of lightning—already gone—",
      "thus should one regard one’s self.",
    ],
  },
  {
    title: "",
    author: "Ikkyū Sōjun",
    lines: [
      "AND what is mind",
      "and how is it recognized?",
      "It is clearly drawn",
      "in sumi ink, the sound",
      "of breezes drifting through pine.",
    ],
  },
  {
    title: "Face-to-Face with My Lover on Daitō’s Anniversary",
    author: "Ikkyū Sōjun",
    lines: [
      "MONKS recite the sutras in honor of the founder,",
      "their many voices cacophonous in my ear.",
      "Afterward, making love, our intimate whispers",
      "mock the empty formal discipline of others.",
    ],
  },
  {
    title: "Elegy",
    author: "Ikkyū Sōjun",
    lines: [
      "WE first lay down among flowers",
      "ten years ago and found a timeless rapture.",
      "Sadly, I remember being pillowed by her lap,",
      "all-night love, all eternity in our vows.",
    ],
  },
  {
    title: "",
    author: "Anonymous",
    lines: [
      "TO learn how to die,",
      "watch cherry blossoms, observe",
      "chrysanthemums.",
    ],
  },
  {
    title: "",
    author: "Buson",
    lines: [
      "IN a bitter wind",
      "a solitary monk bends",
      "to words cut in stone.",
    ],
  },
  {
    title: "",
    author: "Ryōkan",
    lines: [
      "WHO says my poems are poems?",
      "They aren’t poems at all.",
      "Only when you understand my poems aren’t poems",
      "can we talk poetry.",
    ],
  },
  {
    title: "Poem in Four Characters",
    author: "Ryōkan",
    lines: ["ABOVE heaven", "big winds"],
  },
  {
    title: "",
    author: "Ryōkan",
    lines: [
      "I NEVER longed for the wilder side of life.",
      "Rivers and mountains were my friends.",
      "Clouds consumed my shadow where I roamed,",
      "and birds pass high above my resting place.",
      "Straw sandals in snowy villages,",
      "a walking stick in spring,",
      "I sought a timeless truth: the flowers’ glory",
      "is just another form of dust.",
    ],
  },
  {
    title: "",
    author: "Ryōkan",
    lines: [
      "YOU stop to point at the moon in the sky,",
      "but the finger’s blind unless the moon is shining.",
      "One moon, one careless finger pointing—",
      "are these two things or one?",
      "The question is a pointer guiding",
      "a novice from ignorance thick as fog.",
      "Look deeper. The mystery calls and calls:",
      "No moon, no finger—nothing there at all.",
    ],
  },
  {
    title: "",
    author: "Kobayashi Issa",
    lines: [
      "This world of dew",
      "is only the world of dew—",
      "and yet . . . and yet . . .",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["Matsushima ya", "ah Matsushima ya", "Matsushima ya"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "To have blue irises",
      "blooming on one’s feet—",
      "walking-sandal straps",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Summer grasses:",
      "all that remains of great soldiers’",
      "imperial dreams",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "The winds that blow",
      "through South Valley Temple",
      "are sweetened by snow",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Pitifully—under",
      "a great soldier’s empty helmet,",
      "a cricket sings",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Sweep the garden—",
      "all kindnesses falling",
      "willow leaves repay",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "If I took it in hand,",
      "it would melt in my hot tears—",
      "heavy autumn frost",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "With clear melting dew,",
      "I’d try to wash away the dust",
      "of this floating world",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Karasaki’s pine,",
      "compared to blossoming cherry,",
      "looks a bit hazy",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "While we’ve lived our lives",
      "they’ve survived to still blossom,",
      "these old cherry trees",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Moved to tears by",
      "finding my umbilical cord—",
      "the year concludes",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "A world of memory",
      "returns to me when I see",
      "blossoming cherries",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Mile after mile",
      "falls away each day I search",
      "for cherry blossoms",
      "",
      "Blossoming cherries,",
      "a gloomy sky, and, sadly,",
      "one arborvitae",
      "My fan for a cup,",
      "I drink from a downpour",
      "of cherry blossoms.  ",
    ],
  },
  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "New Year’s first snow—ah—",
      "just barely enough to tilt",
      "the daffodil",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Now spring has arrived",
      "on a mountain with no name",
      "in early morning haze",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "All hundred thousand",
      "homes in Kyoto empty—",
      "cherry blossom time",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Flowers are best seen",
      "by the eyes of poor people—",
      "devilish thistle!",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Between our two lives",
      "there is also the life of",
      "the cherry blossom",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Flitting butterflies",
      "in the middle of a field—",
      "sunlit shadows",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Saigyō’s hermitage",
      "must be hidden somewhere in",
      "this blossoming garden",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "At breaking sunrise,",
      "glistening whitefish—an inch",
      "of utter whiteness",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Live the lonely life!",
      "Sing the Lonely Moon-Watcher’s",
      "songs of Nara",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["On a bare branch,", "a solitary crow—", "autumn evening"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Old spider, what is",
      "your song, how do you cry",
      "in the autumn wind?",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["At the ancient pond", "a frog plunges into", "the sound of water"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Now I see her face,",
      "the old woman, abandoned,",
      "the moon her only companion",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Nothing in the cry",
      "of cicadas suggests they",
      "are about to die",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Seen in bright daylight,",
      "its neck is burning red,",
      "this little firefly!",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["On a white poppy,", "a butterfly’s torn wing", "is a keepsake"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "With a warbler for",
      "a soul, it sleeps peacefully,",
      "this mountain willow",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "I slept at a temple—",
      "and now with such seriousness",
      "I watch the moon",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "I’d like to be drunk",
      "and sleep among blooming pinks",
      "on a cool stone",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Crossing long fields,",
      "frozen in its saddle,",
      "my shadow creeps by",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "The morning glories",
      "ignore our drinking party",
      "and burst into bloom",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Old morning glory,",
      "even you, as it turns out,",
      "cannot be my friend",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "A traveler’s heart",
      "is what you should emulate,",
      "pasania bloom",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Grass for a pillow,",
      "the traveler knows best how",
      "to see cherry blossoms",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Wake up! Wake up!",
      "Then we’ll become good friends,",
      "sleeping butterfly",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["Lonely stillness—", "a single cicada’s cry", "sinking into stone"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "The oak’s nobility—",
      "indifferent to flowers—",
      "or so it appears",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["A wanderer,", "so let that be my name—", "the first winter rain"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: ["All along this road", "not a single soul—only", "autumn evening"],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Why just this autumn",
      "have I grown suddenly old—",
      "a bird in the clouds",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Rested from your journey,",
      "now you’ll understand my haiku,",
      "old autumn wind",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Tremble, oh my grave—",
      "in time my cries will be",
      "only this autumn wind",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "Your song caresses",
      "the depths of loneliness,",
      "high mountain bird",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "The whole household—",
      "each with white hair and cane—",
      "visiting a grave",
    ],
  },

  {
    title: "",
    author: "Matsuo Bashō",
    lines: [
      "With plum blossom scent,",
      "this morning sun emerges",
      "along a mountain trail",
    ],
  },

  {
    title: "Bashō’s Death Poem",
    author: "Matsuo Bashō",
    lines: [
      "Sick on my journey,",
      "only my dreams will wander",
      "these desolate moors",
    ],
  },
];

export function getRandomPoem() {
  let poem = JSON.parse(
    JSON.stringify(POEMS[Math.floor(Math.random() * POEMS.length)])
  );
  (poem as any).content = poem.lines.join("\n");
  delete poem.lines;
  return poem;
}
