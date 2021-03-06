import { Itemization } from "src/module/itemization";
import { Chariot, Councillor, Death, Devil, Emperor, Empress, Faith, Fool, Fortune, HangedMan, Hermit, Hierophant, Judgement, Justice, Lovers, Magician, Moon, Priestess, Star, Strength, Sun, Temperance, Tower } from "src/module/persona-type";

export const EletricChairData = [
  //FOOLS
  new Itemization("Arsene","Arsene's Cane (weapon for Joker)","The Great Thief Stick",false,Fool),
  new Itemization("Obariyon","Lucky Punch","Miracle Punch",false,Fool),
  new Itemization("High Pixie","Magaru","Garula",false,Fool),
  new Itemization("Ose","Counterstrike","High Counter",false,Fool),
  new Itemization("Crystal Skull","Crystal Skull (accessory)","Crystal Skull R",false,Fool),
  new Itemization("Legion","Foul Breath","Stagnant Air",false,Fool),
  new Itemization("Bugs","Bear Gloves (weapon for Makoto)","Big Bear Gloves",false,Fool),
  new Itemization("Black Frost","Naraka Whip (weapon for Ann)","Dainaraka Whip",false,Fool),
  new Itemization("Vishnu","Sudarshana (gun for Morgana)","Sudarshana EX",false,Fool),
  new Itemization("Satanael","Paradise Lost (weapon for Joker)","Paradise Lost R",false,Fool),
  new Itemization("Jack-o'-Lantern","Pumpkin Bomb (shotgun for Ryuji)","Pumpkin Buster",false,Magician),
  //MAGICIANS
new Itemization("Cait Sith","Agi","Maragi",false,Magician),
new Itemization("Jack Frost","Frost Hood (armor for Morgana)","Frost Ace Hood",false,Magician),
new Itemization("Nekomata","Pawzooka (gun for Haru)","Paw-omber",false,Magician),
new Itemization("Sandman","Dormina","Lullaby",false,Magician),
new Itemization("Choronzon","Curse Ring (accessory)","Spiral Curse Ring",false,Magician),
new Itemization("Queen Mab","Masquerade Ribbon (weapon for Ann)","Masquerade Ribbon R",false,Magician),
new Itemization("Rangda","Maeiga","Eigaon",false,Magician),
new Itemization("Forneus","Psiodyne","Mapsiodyne",false,Magician),
new Itemization("Surt","Maragidyne","Inferno",false,Magician),
new Itemization("Futsunushi","Hinokagutsuchi (weapon for Akechi)","Hinokagutsuchi II",false,Magician),
  //PRIESTESS
  new Itemization("Silky","Silk Dress (armor for females)","Fine Silk Dress",false,Priestess),
  new Itemization("Apsaras","Media","Diarama",false,Priestess),
  new Itemization("Koh-i-Noor","Koh-i-Noor (accessory)","Koh-i-Noor R",false,Priestess),
  new Itemization("Isis","Kouga","Makouga",false,Priestess),
  new Itemization("Kikuri-Hime","Energy Drop","Energy Shower",false,Priestess),
  new Itemization("Sarasvati","Mediarama","Diarahan",false,Priestess),
  new Itemization("Skadi","Snow Queen's Whip (weapon for Ann)","Snow Queen's Whip II",false,Priestess),
  new Itemization("Scathach","Makarakarn","Tetrakarn",false,Priestess),
  new Itemization("Cybele","Sabazios (weapon for Makoto)","Gordios",false,Priestess),
  //EMPRESS
new Itemization("Persona","Item","Fusion Alarm Item",false,Empress),
new Itemization("Queen's Necklace","Queen's Necklace (accessory)","Queen's Necklace R",false,Empress),
new Itemization("Yaksini","Hysterical Slap","Oni-Kagura",false,Empress),
new Itemization("Lamia","Rakukaja","Marakukaja",false,Empress),
new Itemization("Hariti","Revival Charm (accessory)","Rejuvenate Charm",false,Empress),
new Itemization("Dakini","Tempest Slash","Myriad Slashes",false,Empress),
new Itemization("Titania","Freidyne","Mafreidyne",false,Empress),
new Itemization("Kali","Null Psy","Repel Psy",false,Empress),
new Itemization("Alilat","Mabufudyne","Diamond Dust",false,Empress),
new Itemization("Mother Harlot","Claiomh Solais (weapon for Morgana)","Claiomh Solais R",false,Empress),
//Emperor
new Itemization("Regent","Regent (accessory)","Regent R",false,Emperor),
new Itemization("Eligor","Tarukaja","Matarukaja",false,Emperor),
new Itemization("Setanta","Rebellion Anklet (accessory)","Revolution Anklet",false,Emperor),
new Itemization("Thoth","Mafreila","Freidyne",false,Emperor),
new Itemization("Barong","Ziodyne","Maziodyne",false,Emperor),
new Itemization("King Frost","King Frost Cape (armor for everyone)","King Frost Cape EX",false,Emperor),
new Itemization("Oberon","Heat Wave","Vorpal Blade",false,Emperor),
new Itemization("Baal","Yagrush (gun for Haru)","Yagrush EX",false,Emperor),
new Itemization("Odin","Wild Hunt (gun for Ann)","Gungnir",false,Emperor),
//Hierophant
new Itemization("Berith","Cleave","Power Slash",false,Hierophant),
new Itemization("Orobas","Rakunda","Marakunda",false,Hierophant),
new Itemization("Anzu","Garula","Magarula",false,Hierophant),
new Itemization("Daisoujou","Spiral Blessing Ring (accessory)","Divine Ring",false,Hierophant),
new Itemization("Mishaguji","Spiral Karma Ring (accessory)","Mystic Ring",false,Hierophant),
new Itemization("Bishamonten","Mafreidyne","Atomic Flare",false,Hierophant),
new Itemization("Kohryu","Spiral Mystic Ring (accessory)","Dragon's Heart",false,Hierophant),
//Lovers
new Itemization("Pixie","Static Ring (accessory)","Spiral Static Ring",false,Lovers),
new Itemization("Saki Mitama","Energy Charm","Spiral Energy Charm",false,Lovers),
new Itemization("Ame-no-Uzume","Senryou Yakusha (weapon for Yusuke)","Senryou Yakusha R",false,Lovers),
new Itemization("Leanan Sidhe","Mudo","Mamudo",false,Lovers),
new Itemization("Kushinada","Cure Charm (accessory)","Spiral Cure Charm",false,Lovers),
new Itemization("Narcissus","Dazzler","Nocturnal Flash",false,Lovers),
new Itemization("Parvati","Null Ice","Repel Ice",false,Lovers),
new Itemization("Raphael","Null Bless","Repel Bless",false,Lovers),
new Itemization("Ishtar","Spiral Thunder Ring","Goddess Horn",false,Lovers),
//Chariot
new Itemization("Agathion","Zio","Mazio",false,Chariot),
new Itemization("Slime","Tarunda","Matarunda",false,Chariot),
new Itemization("Shiki-Ouji","Double Shot","Triple Down",false,Chariot),
new Itemization("Kin-Ki","Vajra Blast","Vicious Strike",false,Chariot),
new Itemization("Ara Mitama","Nuclear Ring (accessory)","Spiral Nuclear Ring",false,Chariot),
new Itemization("White Rider","Gun Boost","Gun Amp",false,Chariot),
new Itemization("Cerberus","Megaton Raid","God's Hand",false,Chariot),
new Itemization("Thor","Mjolnir (weapon for Ryuji)","Imprisoned Mjolnir",false,Chariot),
new Itemization("Chi You","Repel Phys","Drain Phys",false,Chariot),
//Justice
new Itemization("Angel","Kouha","Makouha",false,Justice),
new Itemization("Archangel","Hama","Mahama",false,Justice),
new Itemization("Principality","Blessing Ring (accessory)","Spiral Blessing Ring",false,Justice),
new Itemization("Power","Bless Boost","Bless Amp",false,Justice),
new Itemization("Melchizedek","Hamaon","Mahamaon",false,Justice),
new Itemization("Dominion","Makougaon","Divine Judgment",false,Justice),
new Itemization("Throne","Spiral Divine Ring (accessory)","Judgment Cross",false,Justice),
new Itemization("Uriel","Heaven's Gate (gun for Yusuke)","Providence",false,Justice),
new Itemization("Metatron","Nataraja (gun for Joker)","Nataraja EX",false,Justice),
//Hermit
new Itemization("Persona","Item","Fusion Alarm Item",false,Hermit),
new Itemization("Bicorn","Lunge","Assault Dive",false,Hermit),
new Itemization("Koropokguru","Bufu","Mabufu",false,Hermit),
new Itemization("Ippon-Datara","Sledgehammer","Flash Bomb",false,Hermit),
new Itemization("Sudama","Mapsi","Psio",false,Hermit),
new Itemization("Naga","Counter","Counterstrike",false,Hermit),
new Itemization("Kurama Tengu","Wind Ring (accessory)","Spiral Wind Ring",false,Hermit),
new Itemization("Arahabaki","Tapsuan (armor for females)","Fine Tapsuan",false,Hermit),
new Itemization("Kumbhanda","Terror Claw","Bloodbath",false,Hermit),
new Itemization("Koumokuten","Regenerate 2","Regenerate 3",false,Hermit),
new Itemization("Loa","Ominous Words","Abysmal Surge",false,Hermit),
new Itemization("Fafnir","Spiral Reactor Ring (accessory)","Fire Dragon Horn",false,Hermit),
new Itemization("Ongyo-ki","Myriad Slash Belt (accessory)","Sword Dance Belt",false,Hermit),
//Fortune
new Itemization("Stone of Scone","Stone of Scone (accessory)","Stone of Scone R",false,Fortune),
new Itemization("Clotho","Tetraja","Makarakarn",false,Fortune),
new Itemization("Lachesis","Snow Ring (accessory)","Spiral Snow Ring",false,Fortune),
new Itemization("Atropos","Mazionga","Ziodyne",false,Fortune),
new Itemization("Fortuna","Lucky Robe (armor for females)","Super Lucky Robe",false,Fortune),
new Itemization("Norn","Recarm","Samarecarm",false,Fortune),
new Itemization("Lakshmi","Amrita Charm (accessory)","Spiral Amrita Charm",false,Fortune),
//Strength
new Itemization("Kelpie","Garu","Magaru",false,Strength),
new Itemization("Shiisaa","Double Fangs","Cornered Fang",false,Strength),
new Itemization("Oni","Rampage","Kill Rush",false,Strength),
new Itemization("Orlov","Orlov (accessory)","Orlov R",false,Strength),
new Itemization("Rakshasa","Regenerate 1","Regenerate 2",false,Strength),
new Itemization("Zouchouten","Spark Ring (accessory)","Spiral Spark Ring",false,Strength),
new Itemization("Valkyrie","Rising Slash","Deadly Fury",false,Strength),
new Itemization("Hanuman","Ruyi Jingu Bang (weapon for Ryuji)","Fine Ruyi Jingu Bang",false,Strength),
new Itemization("Chimera","Null Fire","Drain Fire",false,Strength),
new Itemization("Zaou-Gongen","God's Hand Belt","Gigantomachia Belt",false,Strength),
//HangedMan
new Itemization("Hua Po","Ember Ring (accessory)","Spiral Ember Ring",false,HangedMan),
new Itemization("Inugami","Giant Slice","Rising Slash",false,HangedMan),
new Itemization("Orthrus","Agilao","Maragion",false,HangedMan),
new Itemization("Take-Minakata","Zionga","Mazionga",false,HangedMan),
new Itemization("Emperor's Amulet","Emperor's Amulet (accessory)","Emperor's Charm R",false,HangedMan),
new Itemization("Hecatoncheires","Swift Strike Belt (accessory)","Gatling Belt",false,HangedMan),
new Itemization("Jatayu","Speed Master","Auto-Masuku",false,HangedMan),
new Itemization("Moloch","Inferno Ring (accessory)","Spiral Inferno Ring",false,HangedMan),
new Itemization("Macabre","Bloodbath","Death Scythe",false,HangedMan),
new Itemization("Attis","Null Curse","Drain Curse",false,HangedMan),
//Death
new Itemization("Mandrake","Sukunda","Masukunda",false,Death),
new Itemization("Mokoi","Dekunda","Dekaja",false,Death),
new Itemization("Matador","Blood Red Capote (armor for males)","Bloodied Capote",false,Death),
new Itemization("Nue","Maeiha","Eiga",false,Death),
new Itemization("Pisaca","Headhunter Ladle (weapon for Morgana)","Headhunter Ladle EX",false,Death),
new Itemization("Hope Diamond","Hope Diamond (accessory)","Hope Diamond R",false,Death),
new Itemization("Hell Biker","Black Jacket (armor for males)","Dark Jacket",false,Death),
new Itemization("Pale Rider","Hex Ring (accessory)","Spiral Hex Ring",false,Death),
new Itemization("Chernobog","Mudoon","Mamudoon",false,Death),
new Itemization("Mot","Null Elec","Repel Elec",false,Death),
new Itemization("Alice","Spiral Hell Ring (accessory)","Cursed Ribbon",false,Death),
//Temperance
new Itemization("Genbu","Frost Ring (accessory)","Spiral Frost Ring",false,Temperance),
new Itemization("Koppa Tengu","Breeze Ring (accessory)","Spiral Breeze Ring",false,Temperance),
new Itemization("Makami","Frei","Mafrei",false,Temperance),
new Itemization("Jikokuten","Assault Belt (accessory)","Rush Belt",false,Temperance),
new Itemization("Mitra","Death Contract (weapon for Haru)","Death Promise",false,Temperance),
new Itemization("Byakko","Spiral Snow Ring (accessory)","Blizzard Ring",false,Temperance),
new Itemization("Raja Naga","Thunder Ring (accessory)","Spiral Thunder Ring",false,Temperance),
new Itemization("Gabriel","Spiral Blizzard Ring","Diamond Dust Lily",false,Temperance),
new Itemization("Ardha","Sahasrara (gun for Kasumi)","Sahasrara EX",false,Temperance),
//Devil
new Itemization("Incubus","Dream Needle","Dormin Rush",false,Devil),
new Itemization("Flauros","Giant Slice Belt (accessory)","Rising Slash Belt",false,Devil),
new Itemization("Andras","Evil Touch","Evil Smile",false,Devil),
new Itemization("Lilim","Ice Boost","Ice Amp",false,Devil),
new Itemization("Pazuzu","Spiral Curse Ring (accessory)","Hex Ring",false,Devil),
new Itemization("Baphomet","Bufudyne","Mabufudyne",false,Devil),
new Itemization("Nebiros","Marin Karin","Brain Jack",false,Devil),
new Itemization("Belial","Mamudoon","Demonic Decree",false,Devil),
new Itemization("Beelzebub","Fleurs du Mal (weapon for Haru)","Fleurs du Mal R",false,Devil),
//Tower
new Itemization("Belphegor","Mabufula","Bufudyne",false,Tower),
new Itemization("Red Rider","Karma Ring (accessory)","Spiral Karma Ring",false,Tower),
new Itemization("Seth","Triple Shot Belt (accessory)","Special Shot Belt",false,Tower),
new Itemization("Black Rider","Megidola","Megidolaon",false,Tower),
new Itemization("Mara","Mapsiodyne","Psycho Force",false,Tower),
new Itemization("Yoshitsune","Usumidori (weapon for Yusuke)","Usumidori R",false,Tower),
new Itemization("Mada","Spiral Inferno Ring (accessory)","Dark Flame Band",false,Tower),
//Star
new Itemization("Kodama","Psy Ring (accessory)","Spiral Psy Ring",false,Star),
new Itemization("Fuu-Ki","Wind Boost","Wind Amp",false,Star),
new Itemization("Neko Shogun","Catnap (gun for Morgana)","Cat Buster",false,Star),
new Itemization("Kaiwan","Makajama","Makajamaon",false,Star),
new Itemization("Garuda","Garudyne","Magarudyne",false,Star),
new Itemization("Vasuki","K. Gohou (gun for Yusuke)","K. Gouhou EX",false,Star),
new Itemization("Sraosha","Archangel Bra (armor for females)","High Archangel Bra",false,Star),
new Itemization("Hastur","Spiral Gale Ring (accessory)","Storm Sculpture",false,Star),
new Itemization("Lucifer","Tyrant Pistol (gun for Joker)","Tyrant Pistol EX",false,Star),
//Moon
new Itemization("Succubus","Brain Shot (gun for Ann)","Pink Buster",false,Moon),
new Itemization("Onmoraki","Grudge Ring (accessory)","Spiral Grudge Ring",false,Moon),
new Itemization("Black Ooze","Headbutt","Memory Blow",false,Moon),
new Itemization("Sui-Ki","Bufula","Mabufula",false,Moon),
new Itemization("Mothman","Skull Cracker","Mind Slice",false,Moon),
new Itemization("Girimehkala","Swift Strike","Deathbound",false,Moon),
new Itemization("Lilith","Null Nuke","Repel Nuke",false,Moon),
new Itemization("Byakhee","Null Wind","Repel Wind",false,Moon),
new Itemization("Sandalphon","Sword of Sinai (weapon for Kasumi)","Sword of Sinai II",true,Moon),
//Sun
new Itemization("Suzaku","Atom Ring (accessory)","Spiral Atom Ring",false,Sun),
new Itemization("Thunderbird","Elec Boost","Elec Amp",false,Sun),
new Itemization("Mithras","Nuke Boost","Nuke Amp",false,Sun),
new Itemization("Yurlungur","Mirrirmina (gun for Makoto)","Mirrirmina EX",false,Sun),
new Itemization("Horus","Hallowed Ring (accessory)","Spiral Hallowed Ring",false,Sun),
new Itemization("Ganesha","Rebellion","Revolution",false,Sun),
new Itemization("Quetzacoatl","Magarudyne","Panta Rhei",false,Sun),
new Itemization("Asura","Vajra (weapon for Makoto)","Unparalled Vajra",false,Sun),
//Judgment
new Itemization("Anubis","Makouga","Kougaon",false,Judgement),
new Itemization("Trumpeter","Reactor Ring (accessory)","Spiral Reactor Ring",false,Judgement),
new Itemization("Yamata-no-Orochi","Triple Down","One-shot Kill",false,Judgement),
new Itemization("Abaddon","Megaton Belt (accessory)","God's Hand Belt",false,Judgement),
new Itemization("Shiva","Megido Fire (gun for Ryuji)","Megido Blaster",false,Judgement),
new Itemization("Michael","Judge of Hell (gun for Makoto)","Judge End",false,Judgement),
new Itemization("Satan","Tantric Oath (armor for males)","Tantric Oath R",false,Judgement),
//Faith
new Itemization("Phoenix","Heavensent Dress (armor for females)","Godsent Dress",true,Faith),
new Itemization("Tam Lin","Fairy Knight Armor (armor for males)","Fairy Hero Armor",true,Faith),
new Itemization("Unicorn","Mahama","Hamaon",true,Faith),
new Itemization("Okuninushi","Official's Robe (armor for males)","Official's Robe R",true,Faith),
new Itemization("Orichalcum","Orichalcum (accessory)","Orichalcum R",true,Faith),
new Itemization("Atavaka","Brave Blade","Sword Dance",true,Faith),
new Itemization("Cu Chulainn","One-shot Kill","Riot Gun",true,Faith),
new Itemization("Siegfried","Vorpal Blade Belt (accessory)","Brave Belt",true,Faith),
new Itemization("Maria","Spiral Heal Charm (accessory)","Rosary of Purity",true,Faith),
//Councillor
new Itemization("Kushi Mitama","Aid Charm (accessory)","Spiral Aid Charm",true,Councillor),
new Itemization("Nigi Mitama","Prayer Ring (accessory)","Spiral Prayer Ring",true,Councillor),
new Itemization("Decarabia","Maragion","Agidyne",true,Councillor),
new Itemization("Ananta","Spiral Nuclear Ring (accessory)","Reactor Ring",true,Councillor),
new Itemization("Yatagarasu","Black Wing Robe (armor for all)","Black Wing Robe R",true,Councillor),
new Itemization("Seiryu","Blizzard Ring (accessory)","Spiral Blizzard Ring",true,Councillor),
new Itemization("Dionysus","Maziodyne","Thunder Reign",true,Councillor),
new Itemization("Vohu Manah","Doomsday (gun for Akechi)","Ancient Day",true,Councillor),
//DLCs
new Itemization("Orpheus (female)","Graceful Harp (accessory)","Graceful Harp R",true,Fool),
new Itemization("Orpheus Picaro (female)","Endure","Enduring Soul",true,Fool),
new Itemization("Kaguya","Moonlight Robe (armor for females)","Moonlight Robe R",true,Fool),
new Itemization("Izanagi","White Headband (accessory)","White Headband R",true,Fool),
new Itemization("Izanagi Picaro","Growth 2","Growth 3",true,Fool),
new Itemization("Kaguya Picaro","Diarahan","Mediarahan",true,Fool),
new Itemization("Orpheus (male)","Hades Harp","Hades Harp R",true,Fool),
new Itemization("Orpheus Picaro (male)","Agidyne","Maragidyne",true,Fool),
new Itemization("Ariadne","Red String (accessory)","Red String R",true,Fool),
new Itemization("Ariadne Picaro","Auto-Mataru","Auto-Maraku",true,Fool),
new Itemization("Magatsu Izanagi","Black Headband (accessory)","Black Headband R",true,Fool),
new Itemization("Athena","Kugelbein (accessory)","Kugelbein R",true,Fool),
new Itemization("Magatsu Izanagi Picaro","Heat Riser","Debilitate",true,Fool),
new Itemization("Tsukiyomi","Black Moon (accessory)","Black Moon R",true,Fool),
new Itemization("Athena Picaro","Charge","Concentrate",true,Fool),
new Itemization("Tsukiyomi Picaro","Spell Master","Arms Master",true,Fool),
new Itemization("Asterius","Blazing Horns (accessory)","Inferno Horns",true,Fool),
new Itemization("Asterius Picaro","Gigantomachia","Agneyastra",true,Fool),
new Itemization("Thanatos","Darkness Ring (accessory)","Darkness Ring R",true,Fool),
new Itemization("Thanatos Picaro","Maeigaon","Demonic Decree",true,Fool),
new Itemization("Raoul","Picaresque Hat (accessory)","Picaresque Crown",true,Fool),
new Itemization("Izanagi-no-Okami","Shiny Belt (accessory)","Shiny Belt R",true,Fool),
new Itemization("Messiah","Sirius Armor (armor)","Sirius Armor EX",true,Fool),
new Itemization("Izanagi-no-Okami Picaro","Mediarahan","Salvation",true,Fool),
new Itemization("Messiah Picaro","Insta-Heal","Firm Stance",true,Fool),
]
