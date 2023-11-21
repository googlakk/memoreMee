export enum LEVELS {
  semiFinal = "semiFinal",
  Final = "final",
  grandFinal = "grandFinal",
}
export enum STAGES {
  kids = "kids",
  junior = "junior",
  senior = "senior",
  absolute = "absolute",
}
interface WordData {
  [LEVELS.semiFinal]?: string[];
  [LEVELS.Final]?: string[];
  [LEVELS.grandFinal]?: string[];
}

type Words = Record<string, WordData>;

export const words: Words = {
  kids: {
    
    [LEVELS.semiFinal]: [
      "clarinet",
      "instrument",
      "perform",
      "festival",
      "spinach",
      "noodlesS",
      "pancake",
      "surprise",
      "challenge",
      "special",
      "sandcastle",
      "frisbee",
      "heavy",
      "scooter",
      "arrow",
      "connect",
      "world",
      "whale",
      "orca",
      "brilliant",
      "puffin",
      "village",
      "young",
      "choose",
      "helicopter",
      "brave",
      "because",
      "axis",
      "worst",
      "motorbike",
      "field",
      "motorway",
      "path",
      "white",
      "necklace",
      "little",
      "cousin",
      "museum",
      "building",
      "costume",
      "amazing",
      "holiday",
      "marshmallow",
      "near",
      "respect",
      "waterfall",
      "country",
      "volcano",
      "pretty",
      "desert",
      "coconut",
      "cockerel",
      "crown",
      "catch",
      "judo",
      "spade",
      "prefer",
      "square",
      "circle",
      "badge",
      "tomorrow",
      "postcard",
      "website",
      "information",
      "address",
      "across",
      "helipad",
      "bridge",
      "cupboard",
      "insect",
      "touch",
      "shout",
      "guide",
      "exhibit",
      "temple",
      "stroke",
      "maths",
      "memory",
      "origami",
      "jigsaw",
      "month",
      "swing",
      "upside down",
      "monkey",
      "loudly",
      "through",
      "bumblebee",
      "photo",
      "rubbish",
      "bottle",
      "collect",
      "cookery",
      "score",
      "biscuits",
      "fever",
      "sandwiches",
      "goal",
      "keyboard",
      "violin",
      "child",
      "today",
      "school",
      "coin",
      "morning",
      "finish",
      "play",
      "tree",
      "poster",
      "river",
      "keep",
      "look",
      "tent",
      "lake",
      "fish",
      "find",
      "holiday",
      "great",
      "garden",
      "another",
      "jumper",
      "shell",
      "cheese",
      "peach",
      "laptop",
      "internet",
      "roof",
      "hotel",
      "modern",
      "planet",
      "moon",
      "tour",
      "watch",
      "gift",
      "video",
      "paint",
      "neck",
      "alive",
      "dress",
      "lotus",
      "shoe",
      "number",
      "teacher",
      "model",
      "climb",
      "slide",
      "frog",
      "plant",
      "running",
      "lucky",
      "friendly",
      "grandchild",
      "polite",
      "shelf",
      "wavy",
      "biology",
      "hardly",
      "ever",
      "history",
      "large",
      "mountain",
      "narrow",
      "adult",
      "Thursday",
      "easy",
      "factory",
      "fantastic",
      "skirt",
      "trousers",
      "untidy",
      "cheese",
      "onion",
      "dirty",
      "gym",
      "noisy",
      "cloud",
      "elephant",
      "soldier",
      "tail",
      "wing",
      "remember",
      "brightly",
      "bowling",
      "draw",
      "angry",
      "volleyball",
      "light",
      "drive",
      "fence",
      "garage",
      "attic",
      "balcony",
      "carpet",
      "answer",
      "idealism",
      "appear",
      "chocolate",
      "yellow",
      "recorder",
      "flute",
      "listen",
      "cupboard",
      "dance",
      "desk",
      "drums",
      "eraser",
      "tidy",
      "swim",
      "always",
      "arrive",
      "cardigan",
      "level",
      "jumper",
      "rope",
      "purple",
      "chicken",
      "crisps",
      "between",
      "across",
      "bee",
      "monkey",
      "round",
      "shark",
      "snake",
      "snow",
      "spider",
      "camping",
      "chess",
      "cream",
      "shy",
      "pride",
      "shoulder",
      "farmhouse",
      "fireplace",
      "bookcase",
      "comics",
      "carnival",
      "fantastic",
      "street",
      "watermelon",
      "pineapple",
      "concert",
      "baby",
      "think",
      "autumn",
      "pumpkin",
      "beetle",
      "picnic",
      "biscuits",
      "wasp",
      "surfing",
      "cloudy",
      "collect",
      "picnic",
      "perfect",
      "otter",
      "nest",
      "boat",
      "want",
      "unit",
      "fire",
      "stick",
      "bread",
      "coat",
      "present",
      "helmet",
      "gloves",
      "cello",
      "solve",
      "tidy",
      "kind",
      "dragon",
      "clue",
      "suit",
      "scare",
      "children",
      "child",
      "jacket",
      "person",
      "train",
      "computer",
      "wood",
      "gate",
      "farm",
      "flat",
      "study",
      "work",
      "number",
      "house",
      "travel",
      "simple",
      "uncle",
      "aunt",
      "family",
      "until",
      "open",
      "wish",
      "chair",
      "cave",
      "hungry",
      "dance",
    ],
    [LEVELS.Final]: [
      "daughter",
      "granddaughter",
      "hard working",
      "husband",
      "sensible",
      "saxophone",
      "sing",
      "bridge",
      "chemistry",
      "dangerous",
      "excited",
      "jungle",
      "casual",
      "different",
      "difficult",
      "expensive",
      "headphones",
      "long sleeved",
      "customer",
      "strawberry",
      "vegetable",
      "roundabout",
      "village",
      "giraffe",
      "battery",
      "laptop",
      "memory",
      "tablet",
      "proud",
      "sensitive",
      "theater",
      "wild",
      "loyal",
      "anger",
      "shame",
      "twist",
      "picture",
      "basement",
      "charming",
      "comment",
      "create",
      "recycle",
      "bicycle",
      "bench",
      "dragonfly",
      "cymbals",
      "trumpet",
      "uniform",
      "guitar",
      "traditional",
      "weather",
      "performance",
      "restaurant",
      "prawn",
      "yogurt",
      "beautiful",
      "explore",
      "mystery",
      "ocean",
      "China",
      "guide",
      "thousand",
      "favorite",
      "countryside",
      "compare",
      "information",
      "imagination",
      "superhero",
      "superpower",
      "horizontal",
      "vertical",
      "survey",
      "community",
      "volunteer",
      "mountain",
      "important",
      "pavement",
      "locate",
      "special",
      "activity",
      "question",
      "camper van",
      "infinitive",
      "realistic",
      "educational",
      "ancient",
      "adventure",
      "quickly",
      "humming bird",
      "magnifying glass",
      "beasts",
      "antennae",
      "while",
      "geography",
      "interesting",
      "gallery",
      "yesterday",
      "pyramid",
      "hieroglyphs",
      "whisper",
      "exhibition",
      "fossil bones",
      "sculpture",
      "luxury",
      "triangle",
      "technology",
      "features",
      "navigation",
      "attractive",
      "understand",
      "dinosaur",
      "concentrate",
      "important",
      "television",
      "competition",
      "guess",
      "alphabet",
      "scientist",
      "excellent",
      "rugby",
      "library",
      "opposite",
      "straight",
      "Wednesday",
      "quarter",
      "celebration",
      "decorate",
      "crocodile",
      "penguin",
      "decoration",
      "scissors",
      "yummy",
      "lantern",
      "handle",
      "tortoise",
      "kingfisher",
      "chameleon",
      "squirrel",
      "cushion",
      "candle",
      "angry",
      "hungry",
      "thirsty",
      "statue",
      "brother",
      "burn",
      "daughter",
      "granddaughter",
      "hard working",
      "husband",
      "sensible",
      "saxophone",
      "sing",
      "bridge",
      "chemistry",
      "dangerous",
      "excited",
      "jungle",
      "casual",
      "different",
      "difficult",
      "expensive",
      "headphones",
      "long sleeved",
      "customer",
      "strawberry",
      "vegetable",
      "roundabout",
      "village",
      "giraffe",
      "battery",
      "laptop",
      "memory",
      "tablet",
      "proud",
      "sensitive",
      "theater",
      "wild",
      "loyal",
      "anger",
      "shame",
      "twist",
      "picture",
      "basement",
      "charming",
      "comment",
      "create",
      "recycle",
      "bicycle",
      "bench",
      "dragonfly",
      "cymbals",
      "trumpet",
      "uniform",
      "guitar",
      "traditional",
      "weather",
      "performance",
      "restaurant",
      "prawn",
    ],
  },
  junior: {
    [LEVELS.semiFinal]: [
      "guitar",
      "keyboard",
      "hardly ever",
      "grandchild",
      "husband",
      "sensible",
      "saxophone",
      "bridge",
      "dangerous",
      "excited",
      "jungle",
      "narrow",
      "Thursday",
      "valley",
      "cardigan",
      "casual",
      "different",
      "difficult",
      "expensive",
      "headphones",
      "knife",
      "special",
      "cheese",
      "cucumber",
      "customer",
      "strawberry",
      "chef",
      "attractive",
      "crossroads",
      "crowd",
      "library",
      "mosque",
      "opposite",
      "roundabout",
      "traffic",
      "village",
      "dolphin",
      "giraffe",
      "scientist",
      "soldier",
      "breakdown",
      "politician",
      "delete",
      "plug in",
      "speakers",
      "tablet",
      "castle",
      "outgoing",
      "theater",
      "wildlife",
      "adult",
      "loyal",
      "astronomy",
      "high speed",
      "fitness",
      "afraid",
      "anger",
      "ankle",
      "envy",
      "forehead",
      "medicine",
      "scalp",
      "shame",
      "shoulder",
      "skull",
      "attic",
      "wrist",
      "path",
      "picture",
      "villa",
      "wardrobe",
      "comment",
      "create",
      "follow",
      "recycle",
      "dump",
      "memory stick",
      "design",
      "modesty",
      "sympathy",
      "respond",
      "bicycle",
      "appear",
      "bench",
      "tortoise",
      "realistic",
      "chameleon",
      "squirrel",
      "cushion",
      "candle",
      "coalition",
      "hungry",
      "dinosaur",
      "statue",
      "opposite",
      "television",
      "Wednesday",
      "quarter",
      "celebration",
      "decorate",
      "crocodile",
      "penguin",
      "decoration",
      "scissors",
      "ecologist",
      "ecosystem",
      "genetic",
      "unforgettable",
      "fable",
      "folktale",
      "graphic",
      "gutsy",
      "gutter press",
      "chilling",
      "earnestness",
      "ethics",
      "mystery",
      "far fetched",
      "fantasy",
      "elegant",
      "spotty",
      "plunge",
      "spiky",
      "subtle",
      "holiday",
      "summer",
      "plural",
      "exhibit",
      "peach",
      "pineapple",
      "claw",
      "hoof",
      "brush",
      "drawing",
      "starfish",
      "glasses",
      "plane",
      "bench",
      "hungry",
      "scared",
      "macabre",
      "amber",
      "low budget",
      "violet",
      "sandy",
      "fire",
      "coral",
      "shell",
      "infiltrate",
      "fossil",
      "tadpoles",
      "canary",
      "pine",
      "grand",
      "berry",
      "lilac",
      "indigo",
      "bottle",
      "run away",
      "busy",
      "owl",
      "resonate",
      "career",
      "catch",
      "concern",
      "toddler",
      "urgent",
      "afraid",
      "social",
      "design",
      "delete",
      "search",
      "double",
      "novel",
      "pavement",
      "perform",
      "blame",
      "melody",
      "poet",
      "speed",
      "tune",
      "wonder",
      "caravan",
      "coach",
      "station",
      "office",
      "crossing",
      "platform",
      "teach",
      "shine",
      "hang",
      "fight",
      "draw",
      "bring",
      "belong",
      "castle",
      "church",
      "married",
      "pass away",
      "safety",
      "emotion",
      "infant",
      "irritation",
      "camping",
      "ballroom",
      "weather",
      "collect",
      "debating",
      "society",
      "ice rink",
      "elbow",
      "pride",
      "shame",
      "skull",
      "stomach",
      "ankle",
      "carpet",
      "balcony",
      "attic",
      "fence",
      "garage",
      "estate",
      "porch",
      "rubbish",
      "villa",
      "profile",
      "install",
      "creative",
      "common",
      "cartoon",
      "respond",
      "direct",
      "palace",
      "each",
      "upload",
      "update",
      "offer",
      "remind",
      "runout",
      "alone",
      "awful",
      "career",
      "retire",
      "record",
      "selfless",
      "starving",
      "petty",
      "wave",
      "totally",
      "upbeat",
      "fingers",
      "fidget",
      "alarm",
      "edge",
      "gasp",
      "combat",
      "suggest",
      "privacy",
      "highway",
      "keyboard",
      "sharpener",
      "shelf",
      "baggy",
      "bracelet",
      "jungle",
      "wallet",
      "yellow",
      "charger",
      "soldier",
      "router",
      "basement",
      "carpet",
      "pretty",
      "surfing",
      "shelves",
      "wardrobe",
      "grandchild",
      "nephew",
      "fight",
      "caravan",
      "luggage",
      "campsite",
      "package",
      "pamper",
      "sickness",
      "sneakers",
      "sweets",
      "yawn",
      "dizzy",
      "reason",
      "reveal",
      "gender",
      "depth",
      "fever",
      "fresh",
      "running",
      "pump",
      "respect",
      "thief",
      "vandal",
      "pizza",
      "grasshopper",
      "critical",
      "horn",
      "spikes",
      "scales",
      "successful",
      "claws",
      "muffin",
      "owner",
      "finally",
      "because",
      "toad",
      "fountain",
      "sweetcorn",
      "cabbage",
      "rude",
      "robber",
      "royal",
      "enquire",
      "cupboard",
      "dance",
      "eraser",
      "friendly",
      "polite",
      "proud",
      "sing",
      "swim",
      "wavy",
      "always",
      "biology",
      "violin",
      "history",
      "large",
      "mountain",
      "rope",
      "easy",
      "factory",
      "fantastic",
      "light",
      "purple",
      "skirt",
      "trousers",
      "untidy",
      "chicken",
      "chips",
      "onion",
      "vegetable",
      "cinema",
      "dirty",
      "fire station",
      "gym",
      "noisy",
      "ugly",
      "cloud",
      "elephant",
      "monkey",
      "round",
      "tail",
      "wing",
      "laptop",
      "memory",
      "tower",
      "bowling",
      "ideal",
      "getaway",
      "infant",
      "draw",
      "angry",
      "cream",
      "depressed",
      "volleyball",
      "light",
      "pride",
      "drive",
      "fence",
      "fireplace",
      "garage",
      "balcony",
      "basement",
      "carpet",
      "charming",
      "password",
      "profile",
      "idealism",
      "remember",
      "singular",
      "simile",
      "deaf",
      "investors",
      "doomed",
      "inseparable",
      "gutted",
      "friendship",
      "respect",
      "friendship",
      "adjust",
      "ache",
      "advise",
      "discard",
      "elicit",
      "ensure",
      "overtake",
      "plateau",
      "resent",
      "deny",
      "result",
      "against",
      "deeply",
      "direct",
      "effect",
      "solution",
      "rise",
      "interest",
      "wait",
      "afford",
      "brand",
      "jingle",
      "scan",
      "nervous",
      "fresh",
      "nuts",
      "poverty",
      "prove",
      "attack",
      "mutation",
      "myth",
      "burn",
      "famine",
      "submit",
      "skyrocket",
      "snap",
      "revise",
      "scold",
      "global",
      "across",
      "helipad",
      "bridge",
      "honest",
      "insect",
      "touch",
      "shout",
      "guide",
      "cherry",
      "temple",
      "stroke",
      "maths",
      "memory",
      "origami",
      "jigsaw",
      "month",
      "swing",
      "upside down",
      "monkey",
      "loudly",
      "through",
      "picnic",
      "photo",
      "rubbish",
      "bottle",
      "collect",
      "cookery",
      "score",
      "biscuits",
      "stir",
      "sandwiches",
      "goal",
      "feelings",
      "humor",
      "octopus",
      "troops",
      "leader",
      "area",
      "against",
      "target",
      "mint",
      "remind",
      "memory",
      "blind",
      "barman",
    ],
    [LEVELS.Final]: [
      "tempo",
      "huge",
      "stripy",
      "peace",
      "tiny",
      "smooth",
      "messy",
      "rough",
      "instrument",
      "papaya",
      "raspberry",
      "stop sign",
      "blanket",
      "shoulder",
      "bicycle",
      "birds",
      "daisy",
      "grow",
      "buds",
      "breeze",
      "hatch",
      "rake",
      "harvest",
      "siren",
      "shark",
      "turtle",
      "eel",
      "gulf",
      "gymnastics",
      "orbit",
      "sentence",
      "vowel",
      "surprise",
      "capital",
      "shiny",
      "spotty",
      "hard",
      "wellies",
      "raincoat",
      "lizard",
      "skunk",
      "twins",
      "script",
      "napkin",
      "place mat",
      "candle",
      "parrot",
      "budgie",
      "employ",
      "mittens",
      "doubt",
      "ostrich",
      "earth",
      "trumpet",
      "clarinet",
      "flute",
      "slogan",
      "piano",
      "oboe",
      "empty",
      "messages",
      "cello",
      "tuba",
      "tea",
      "sugar",
      "cork",
      "tuna",
      "cornet",
      "slice",
      "kettle",
      "blend",
      "spoon",
      "drizzle",
      "harvest",
      "boring",
      "sweet",
      "blood",
      "bunch",
      "dice",
      "madly",
      "often",
      "little",
      "rather",
      "totally",
      "stairs",
      "slowly",
      "happily",
      "rotate",
      "scream",
      "wonder",
      "dream",
      "admire",
      "against",
      "spicy",
      "world",
      "fruity",
      "shouting",
      "cliff",
      "people",
      "forest",
      "amazing",
      "waterfall",
      "strong",
      "weather",
      "traffic",
      "rainbow",
      "eyelid",
      "finger",
      "brain",
      "locate",
      "right",
      "loud",
      "waste",
      "smoke",
      "detect",
      "familiar",
      "creative",
      "daughter",
      "granddaughter",
      "hard working",
      "moustache",
      "nephew",
      "straight",
      "trumpet",
      "worried",
      "chemistry",
      "artificial",
      "awful",
      "beige",
      "natural",
      "terrible",
      "unnecessary",
      "wrong",
      "throw away",
      "long sleeved",
      "mushroom",
      "prawns",
      "restaurant",
      "service",
      "church",
      "battery",
      "underground",
      "cycle",
      "butterfly",
      "explore",
      "journalist",
      "square",
      "charger",
      "rely",
      "sunrise",
      "through",
      "wireless",
      "finally",
      "social media",
      "touch screen",
      "account",
      "patient",
      "reliable",
      "souvenir",
      "suspicious",
      "terrified",
      "accusing",
      "notification",
      "adolescent",
      "aggressive",
      "grateful",
      "impatience",
      "gymnastics",
      "adrenalin",
      "martial arts",
      "photography",
      "rollerblading",
      "orchestra",
      "antibiotics",
      "happiness",
      "soundproof",
      "muscle",
      "antacid",
      "microwave",
      "curtains",
      "extension",
      "armchair",
      "throat",
      "bungalow",
      "cramped",
      "education",
      "button",
      "intelligence",
      "cellar",
      "charming",
      "cheerfulness",
      "sociability",
      "adrenalin",
      "enthusiasm",
      "generosity",
      "confidence",
      "stubborn",
      "thoughtful",
      "patience",
      "pessimism",
      "punctual",
      "kingfisher",
      "chorus",
      "attractive",
      "understand",
      "thirsty",
      "concentrate",
      "important",
      "straight",
      "competition",
      "government",
      "alphabet",
      "scientist",
      "excellent",
      "witness",
      "abrasive",
      "biochemist",
      "disguise",
      "biotechnology",
      "breakthrough",
      "chemical warfare",
      "weapons",
      "chemistry",
      "cynical",
      "eradicate",
      "evoke",
      "extrovert",
      "gullible",
      "assistance",
      "beautifully",
      "complex",
      "disappointing",
      "determined",
      "euphemism",
      "description",
      "dialogue",
      "narrative",
      "hyperbole",
      "immediately",
      "incognito",
      "mediocre",
      "suspense",
      "mystery",
      "pressure",
      "believable",
      "receive",
      "revelations",
      "exaggerate",
      "seriousness",
      "entreat",
      "epidemics",
      "escalate",
      "fluctuate",
      "fundamental",
      "highlight",
      "outpace",
      "population",
      "disapprove",
      "improvement",
      "injustice",
      "threaten",
      "insurgency",
      "mention",
      "occupation",
      "achieve",
      "fulfil",
      "aspiration",
      "occupy",
      "refuse",
      "punctual",
      "recollections",
      "reserved",
      "shrewd",
      "shrinking",
      "compatibility",
      "confidence",
      "co-operation",
      "daunting",
      "devastated",
      "stunned",
      "businessman",
      "chaperone",
      "crystallise",
      "demeanour",
      "fearless",
      "foreshadow",
      "insignificant",
      "liberal",
      "divorced",
      "pessimistic",
      "arrogant",
      "dependent",
      "distrustful",
      "nostalgic",
      "pessimistic",
      "privacy",
      "private",
      "sarcastic",
      "sympathetic",
      "anxiety",
      "geography",
      "lyrics",
      "bestseller",
      "leisure",
      "encourage",
      "feedback",
      "carbohydrate",
      "sculpture",
      "suggest",
      "advise",
      "voicemail",
      "aircraft",
      "hovercraft",
      "departure",
      "scuba diving",
      "sightseeing",
      "abseiling",
      "ashamed",
      "cathedral",
      "cycling",
    ],
  },
  senior: {
    [LEVELS.semiFinal]: [
      "wrong",
      "customer",
      "knife",
      "mushroom",
      "service",
      "attractive",
      "church",
      "crossroads",
      "library",
      "mosque",
      "opposite",
      "traffic lights",
      "village",
      "butterfly",
      "cycle",
      "dolphin",
      "explore",
      "giraffe",
      "scientist",
      "sunrise",
      "through",
      "sandpaper",
      "charger",
      "finally",
      "plug in",
      "speakers",
      "account",
      "ashamed",
      "castle",
      "monument",
      "patient",
      "sharp",
      "theater",
      "cuddly",
      "loyal",
      "astronomy",
      "grateful",
      "high speed",
      "calcium",
      "anger",
      "ankle",
      "blood",
      "forehead",
      "happiness",
      "soundproof",
      "medicine",
      "muscle",
      "scalp",
      "shame",
      "skull",
      "wrist",
      "curtains",
      "extension",
      "microwave",
      "armchair",
      "breakdown",
      "button",
      "design",
      "memory stick",
      "intelligence",
      "modesty",
      "sympathy",
      "respond",
      "bicycle",
      "appear",
      "bench",
      "skeleton",
      "familiar",
      "loud",
      "quiet",
      "empty",
      "cheerful",
      "distinct",
      "drab",
      "filthy",
      "gleaming",
      "sparkling",
      "strange",
      "clumsy",
      "exotic",
      "floral",
      "smoky",
      "itchy",
      "rough",
      "smooth",
      "soaking",
      "confident",
      "ashamed",
      "tortoise",
      "kingfisher",
      "chameleon",
      "squirrel",
      "cushion",
      "candle",
      "angry",
      "hungry",
      "thirsty",
      "statue",
      "caramel",
      "navy",
      "honey",
      "ginger",
      "venomous",
      "distance",
      "meanwhile",
      "submarine",
      "seahorse",
      "anchor",
      "swordfish",
      "manta ray",
      "shipwreck",
      "puffer fish",
      "proud",
      "gigantic",
      "awful",
      "joyful",
      "pleasant",
      "relieved",
      "excited",
      "dizzy",
      "massive",
      "mighty",
      "petite",
      "brief",
      "rapid",
      "swift",
      "tadpoles",
      "brave",
      "eager",
      "elated",
      "energetic",
      "healthy",
      "clinical",
      "dusty",
      "impressive",
      "lavish",
      "stately",
      "apply",
      "force",
      "gravity",
      "tribe",
      "equator",
      "oyster",
      "katydid",
      "thumb",
      "feather",
      "iguanodon",
      "reptile",
      "backbone",
      "cauliflower",
      "aubergine",
      "cheerful",
      "foolish",
      "fierce",
      "cabbage",
      "grasshopper",
      "straight",
      "Wednesday",
      "quarter",
      "celebration",
      "tapir",
      "opposite",
      "owl",
      "horn",
      "spikes",
      "scales",
      "fur",
      "claws",
      "muffin",
      "owner",
      "finally",
      "because",
      "toad",
      "leek",
      "sweetcorn",
      "poppy",
      "rude",
      "cucumber",
      "royal",
      "jet",
      "cute",
      "huge",
      "stripy",
      "peace",
      "tiny",
      "smooth",
      "messy",
      "penguin",
      "instrument",
      "papaya",
      "television",
      "plum",
      "blanket",
      "shoulder",
      "bicycle",
      "birds",
      "daisy",
      "grow",
      "buds",
      "breeze",
      "hatch",
      "rake",
      "harvest",
      "siren",
      "shark",
      "turtle",
      "eel",
      "gulf",
      "cape",
      "orbit",
      "sentence",
      "vowel",
      "surprise",
      "capital",
      "shiny",
      "spotty",
      "hard",
      "umbrella",
      "raincoat",
      "lizard",
      "skunk",
      "twins",
      "script",
      "napkin",
      "place mat",
      "candle",
      "parrot",
      "budgie",
      "spider",
      "mittens",
      "hail",
      "knife",
      "Earth",
      "trumpet",
      "clarinet",
      "flute",
      "guitar",
      "piano",
      "oboe",
      "empty",
      "harp",
      "cello",
      "effect",
      "tea",
      "sugar",
      "cork",
      "tuna",
      "cornet",
      "slice",
      "kettle",
      "blend",
      "spoon",
      "drizzle",
      "harvest",
      "boring",
      "sweet",
      "blood",
      "bunch",
      "dice",
      "madly",
      "often",
      "little",
      "rather",
      "totally",
      "stairs",
      "slowly",
      "happy",
      "rotate",
      "scream",
      "wonder",
      "dream",
      "admire",
      "against",
      "spicy",
      "sweet",
      "fruity",
      "shouting",
      "cliff",
      "people",
      "forest",
      "amazing",
      "waterfall",
      "strong",
      "volcano",
      "traffic",
      "rainbow",
      "eyelid",
      "iris",
      "brain",
      "locate",
      "right",
      "loud",
      "waste",
      "smoke",
      "detect",
      "familiar",
      "finger",
      "world",
      "calculator",
      "clarinet",
      "guitar",
      "violin",
      "creative",
      "hard working",
      "nephew",
      "straight",
      "trumpet",
      "worried",
      "chemistry",
      "dangerous",
      "jungle",
      "Thursday",
      "valley",
      "awful",
      "beige",
      "different",
      "difficult",
      "expensive",
      "natural",
      "terrible",
      "blackboard",
      "computer",
      "cupboard",
      "eraser",
      "flute",
      "friendly",
      "grandchild",
      "husband",
      "keen",
      "sensible",
      "saxophone",
      "sing",
      "swim",
      "wavy",
      "always",
      "biology",
      "bridge",
      "excited",
      "large",
      "mountain",
      "cardigan",
      "casual",
      "easy",
      "long sleeved",
      "skirt",
      "special",
      "trousers",
      "untidy",
      "bread",
      "cheese",
      "cucumber",
      "onion",
      "strawberry",
      "throw away",
      "vegetable",
      "cinema",
      "crowd",
      "dirty",
      "gym",
      "roundabout",
      "ugly",
      "noisy",
      "cloud",
      "elephant",
      "soldier",
      "tail",
      "through",
      "wing",
      "battery",
      "wardrobe",
      "delete",
      "laptop",
      "memory",
      "tablet",
      "outgoing",
      "tower",
      "wildlife",
      "adult",
      "ideal",
      "get away",
      "infant",
      "draw",
      "fitness",
      "afraid",
      "angry",
      "cream",
      "depressed",
      "volleyball",
      "light",
      "pride",
      "shoulder",
      "throat",
      "pizza",
      "fence",
      "fireplace",
      "path",
      "picture",
      "balcony",
      "basement",
      "charming",
      "villa",
      "comment",
      "create",
      "follow",
      "password",
      "profile",
      "recycle",
      "dump",
      "cellar",
      "idealism",
      "touch",
      "tasty",
      "juicy",
      "sleepy",
      "stormy",
      "magical",
      "windy",
      "sunny",
      "pond",
      "field",
      "hay",
      "bakery",
      "oven",
      "loose",
      "gloomy",
      "noisy",
      "messy",
      "bucket",
      "butter",
      "bread",
      "cutter",
      "lonely",
      "cupcake",
      "bush",
      "path",
      "towel",
      "armchair",
      "smooth",
      "powerful",
      "elegant",
      "spotty",
      "scaly",
      "spiky",
      "large",
      "holiday",
      "summer",
      "plural",
      "cherry",
      "peach",
      "pineapple",
      "claw",
      "hoof",
      "brush",
      "drawing",
      "starfish",
      "glasses",
      "plane",
      "bench",
      "hungry",
      "scared",
      "young",
      "amber",
      "ruby",
      "violet",
      "sandy",
      "fire",
      "coral",
      "shell",
      "octopus",
      "fossil",
      "handsome",
      "canary",
      "pine",
      "grand",
      "berry",
      "lilac",
      "indigo",
      "bottle",
      "mint",
      "busy",
    ],
    [LEVELS.Final]: [
      "crocodile",
      "rough",
      "decoration",
      "scissors",
      "attractive",
      "understand",
      "dinosaur",
      "concentrate",
      "important",
      "raspberry",
      "competition",
      "guess",
      "alphabet",
      "scientist",
      "excellent",
      "rugby",
      "blossom",
      "scarecrow",
      "exercise",
      "slice",
      "heat",
      "spaghetti",
      "crumble",
      "delta",
      "crescent",
      "phase",
      "change",
      "speech",
      "orchestra",
      "Titanic",
      "delicate",
      "spindly",
      "creepy",
      "daughter",
      "passion fruit",
      "snout",
      "trunk",
      "antler",
      "gills",
      "trotter",
      "tights",
      "trousers",
      "wellies",
      "alligator",
      "tongue",
      "freckles",
      "icicle",
      "slippery",
      "delivery",
      "shuttle",
      "measure",
      "ostrich",
      "sausage",
      "fridge",
      "cymbals",
      "violin",
      "asteroid",
      "volume",
      "capacity",
      "container",
      "tray",
      "vinegar",
      "blade",
      "clove",
      "yogurt",
      "wealth",
      "superhuman",
      "castanets",
      "lighthouse",
      "acorns",
      "migration",
      "behave",
      "recipe",
      "disaster",
      "costume",
      "childhood",
      "iceberg",
      "pirate",
      "provide",
      "musty",
      "scent",
      "rotten",
      "pleasant",
      "stinky",
      "aromatic",
      "creamy",
      "bitter",
      "appetizing",
      "acidic",
      "sour",
      "bumpy",
      "knobbly",
      "moaning",
      "roaring",
      "correct",
      "electricity",
      "monsoon",
      "rainforest",
      "trench",
      "weather",
      "canyon",
      "monument",
      "separate",
      "nerve",
      "protect",
      "reflect",
      "retina",
      "optic",
      "implant",
      "perfume",
      "breathe",
      "future",
      "marmalade",
      "texture",
      "crocodile",
      "rough",
      "decoration",
      "scissors",
      "attractive",
      "understand",
      "dinosaur",
      "concentrate",
      "important",
      "raspberry",
      "competition",
      "guess",
      "alphabet",
      "scientist",
      "excellent",
      "rugby",
      "blossom",
      "scarecrow",
      "exercise",
      "slice",
      "heat",
      "spaghetti",
      "crumble",
      "delta",
      "crescent",
      "phase",
      "change",
      "speech",
      "orchestra",
      "Titanic",
      "delicate",
      "spindly",
      "creepy",
      "daughter",
      "passion fruit",
      "snout",
      "trunk",
      "antler",
      "gills",
      "trotter",
      "tights",
      "trousers",
      "wellies",
      "alligator",
      "tongue",
      "freckles",
      "icicle",
      "slippery",
      "delivery",
      "shuttle",
      "measure",
      "ostrich",
      "sausage",
      "fridge",
      "cymbals",
      "violin",
      "asteroid",
      "volume",
      "capacity",
      "container",
      "tray",
      "vinegar",
      "blade",
      "clove",
      "yogurt",
      "wealth",
      "superhuman",
      "castanets",
      "lighthouse",
      "acorns",
      "migration",
      "behave",
      "recipe",
      "disaster",
      "costume",
      "childhood",
      "iceberg",
      "pirate",
      "provide",
      "musty",
      "scent",
      "rotten",
      "pleasant",
      "stinky",
      "aromatic",
      "creamy",
      "bitter",
      "appetizing",
      "acidic",
      "sour",
      "bumpy",
      "knobbly",
      "moaning",
      "roaring",
      "correct",
      "electricity",
      "monsoon",
      "rainforest",
      "trench",
      "weather",
      "canyon",
      "monument",
      "separate",
      "nerve",
      "protect",
      "reflect",
      "retina",
      "optic",
      "implant",
      "perfume",
      "breathe",
      "future",
      "marmalade",
      "texture",
      "angry",
      "daughter",
      "granddaughter",
      "moustache",
      "artificial",
      "headphones",
      "unnecessary",
      "chef",
      "lettuce",
      "prawns",
      "restaurant",
      "underground",
      "abseil",
      "journalist",
      "politician",
      "rely",
      "wireless",
      "fundraising",
      "social media",
      "touch screen",
      "abseiling",
      "anxious",
      "cathedral",
      "confused",
      "delighted",
      "disappointed",
      "embarrassed",
      "envious",
      "kayak",
      "reliable",
      "souvenir",
      "statue",
      "suspicious",
      "terrified",
      "accusing",
      "nostrils",
      "adolescent",
      "aggressive",
      "arrogant",
      "impatience",
      "gymnastics",
      "martial arts",
      "photography",
      "orchestra",
      "science",
      "antibiotics",
      "anxiety",
      "bandage",
      "disgusted",
      "envy",
      "well equipped",
      "intestine",
      "kidney",
      "painkillers",
      "pride",
      "stomach",
      "thumb",
      "cushion",
      "dining table",
      "attic",
      "bungalow",
      "conservatory",
      "contemporary",
      "cramped",
      "education",
      "substantial",
      "thatched cottage",
      "charming",
      "cheerfulness",
      "sociability",
      "question",
      "enthusiasm",
      "generosity",
      "generous",
      "humor",
      "confidence",
      "stubborn",
      "thoughtful",
      "patience",
      "pessimism",
      "punctual",
      "realistic",
      "chorus",
      "compose",
      "composer",
      "conduct",
      "conductor",
      "tyrannosaurus",
      "complicated",
      "full fledged",
      "bulletproof",
      "desire",
    ],
  },
  absolute: {
    [LEVELS.grandFinal]: [
      "onomatopoeia",
      "obnoxious",
      "personification",
      "nauseous",
      "threatening",
      "ecstatic",
      "enthusiastic",
      "embarrassed",
      "disappointing",
      "pressure",
      "calligraphy",
      "amphibious",
      "ambassador",
      "microorganism",
      "arithmetician",
      "catastrophe",
      "maneuver",
      "radiant",
      "linguistically",
      "spontaneous",
      "cliché",
      "respirator",
      "acquisition",
      "pseudonym",
      "algorithm",
      "lexicologist",
      "ancestor",
      "oasis",
      "bankrupt",
      "athlete",
      "unnecessary",
      "unfortunately",
      "analysis",
      "cinematographer",
      "unconscious",
      "chauffeur",
      "cappuccino",
      "synonymous",
      "asthma",
      "chameleon",
      "envious",
      "luxurious",
      "nostalgia",
      "technically",
      "voucher",
      "vitamin",
      "protein",
      "obesity",
      "council",
      "apology",
    ],
  },
};