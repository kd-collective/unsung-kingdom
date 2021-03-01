export const templeCharacters = {
  soldier1: [
    '本当に陛下の助言どおりであった。', // soldier1
    'プリンセスはまんまと城内の監視をすり抜けて、', // soldier1
    '陛下を追ってついにここまで来られたのだ。', // soldier1
    'だが地下にだけは絶対に通すわけにはいかない…。' // soldier1
  ],
  soldier2: [
    '何度言われましても、お通しすることはできません。', // soldier2
    '私の命令に背くだなんて！お父様に言いつけるわ。', // mary
    'これはまさにその陛下のご命令なのです。', // soldier2
    'どうかご容赦ください。' // soldier2
  ],
  mary: [
    'あ、あなた達は、地下で会った怪しい人たち。', // mary
    'へへ、また会ったね。', // ann
    'こんなところで何しているの？', // ann
    '危ないよ。', // ann
    'お父様や叔父様がドラゴンと戦うっていうのよ。', // mary
    '黙って待っていられるわけないじゃない！', // mary
    'でも、このナイト達が先へ行かせてくれないの。', // mary
    'あなた達からもなんとか言ってちょうだい。', // mary
    'うーん、どうにもならないと思うけど…。' // ann
  ],
  loretta: [
    '？', // loretta
    'あなた達、見覚えがあるわ。', // loretta
    '忘れたの！？', // ann
    'ほら、地下通路で会ったお姉さんだよ！', // ann
    'ああ、思い出したわ。', // loretta
    'こんなところで何しているの？', // ann
    '陛下がドラゴンと戦うのよ。知らないの？', // loretta
    'だからメアリーと一緒に駆けつけたの。', // loretta
    'そうか、心配なんだよね…。', // ann
    'もし陛下に何かあったら…、メアリーは…、', // loretta
    '私が支えなくちゃ…。', // loretta
    '…きっと大丈夫だよ。' // ann
  ],
  dario: {
    talk1: [
      'あ！あなたは、墓地に居た魔法使いね。', // ann
      '君たちは…、', // dario
      'よかった。', // dario
      '僕は君たちにお礼を言う必要があった。', // dario
      '王妃の亡霊のこと…、本当にありがとう。', // dario
      'そして、危険な目にあわせてしまって申し訳なかった。', // dario
      'いいよ、そんなの。', // ann
      'ところで、どうしてここに？', // ann
      '森の賢人がドラゴン討伐の支援に呼ばれたと聞いてね。', // dario
      '心配で僕もついて来たんだ。', // dario
      '君たちも、もし回復が必要だったら遠慮なく言ってくれ。', // dario
      'ありがとう！' // ann
    ],
    talk2: [
      '回復するかい？' // dario
    ],
    option: ['お願い', '大丈夫']
  },
  drystan: [
    'あなたは、ワルコフォレンスの森の賢人！', // ann
    'この間は薬を作ってくれてありがとう。', // ann
    '誰かと思えばあのときの者達か。', // drystan
    'また王族の揉め事に首を突っ込みに来たのか？', // drystan
    'あなたこそ、どうしてここに？', // ann
    '好きで来ているわけではない。', // drystan
    '負傷した兵の治癒を頼まれたのだ。', // drystan
    'そうだったんだ。', // ann
    '竜に手を出すなど、無謀な真似をしてくれた。', // drystan
    '負けは目に見えている。', // drystan
    'ドラゴンはそんなに強いの？', // ann
    '奴らは人間の知り得ない特殊な力を持っている。', // drystan
    '対抗するためには力ではなく知恵が欠かせない。', // drystan
    '遠い昔、この神殿を作った時代の人間は、その知恵を持っていた。', // drystan
    'だが今の我々はそれを失ってしまったのだ。', // drystan
    '知恵、か…。', // ann
    'お前たちも、今回ばかりは諦めることだ。', // drystan
    '熊退治のようにはいかんぞ。' // drystan
  ],
  ray: [
    'あれ、キミは墓荒らしの男の子！', // ann
    'ん？', // ray
    'なんだ、この前のねーちゃん達じゃねーか。', // ray
    'こんなところで何してるの？', // ann
    '別に。', // ray
    'ドラゴンを見に来たんだよ。', // ray
    'ドラゴン？', // ann
    '危ないからやめときなさい！', // ann
    'なんだよ、関係ねーだろ。', // ray
    '生意気ね。', // ann
    'まあでも、元気そうでよかった。', // ann
    'ふん。' // ray
  ]
}

export const lorraine = {
  start1: [
    '何をしているんですか？', // ann
    '彫刻の仕掛けを修復しているんだ。', // architect
    '仕掛け？', // ann
    'そう。この神殿には色々な仕掛けが隠されている。', // architect
    '扉を開けたり、閉ざしたり。', // architect
    'もしかしてこの彫刻を彫った人？', // ann
    'いいや、', // architect
    '僕は仕掛けの部分を直しただけ。', // architect
    'なんせこの神殿は、作られたのも、廃墟になったのも遥かに昔のことだ。', // architect
    '仕掛けを見つけたのも偶然。', // architect
    '偶然？', // ann
    '初めてここへ来て、このロレイン像に心を奪われて以来、', // architect
    '僕はこの像のことが忘れられなくなった。', // architect
    'やがて彫刻家を目指すことに決めたんだ。', // architect
    'それから、食事をとるのも忘れてこの像を眺めた。', // architect
    'それで仕掛けを見つけたんだね。', // ann
    'そう。', // architect
    '台座に仕掛けが隠されているのを見つけた。', // architect
    '壊れていたんだけど、それを修理して、また動くようにした。', // architect
    'すごい。', // ann
    'ところで君たちは、何か困っているのかい？' // architect
  ],
  option: ['像について', 'ドラゴンについて'],
  start2: [
    '像の羽も、壊れているみたいだけど、それは直さないの？', // ann
    '直さない。', // architect
    'さっき言った通り、この像には心を奪われたんだ。壊れていてもね。', // architect
    '何より僕はこの像を彫った人を尊敬している。', // architect
    '僕が手を加えるべきではないんだ。', // architect
    'だから、仕掛けだけ動くようにしている。', // architect
    '何年もかかってしまったけどね。', // architect
    'そっか。ずっとここで作業しているんだね。', // ann
    'ああ。ほとんどの時間をここで過ごしてきた。' // architect
  ],
  start3: [
    'ドラゴンが目覚めたことは知っていた？', // ann
    'もちろん。', // architect
    'ドラゴンはこの神殿の地下で眠っていたが、半月ほど前に目覚めた。', // architect
    'それから今日までの間は、王弟がドラゴンのもとを頻繁に訪れていたね。', // architect
    'どうして？', // ann
    'ドラゴンの怒りを買っている陛下に代わって、王弟がドラゴンと交渉していたみたいだ。', // architect
    'うまくいかなくて、今日に至ったんだろう。', // architect
    'そうだったんだ。', // ann
    '私たちもドラゴンのところへ行きたいんだけど、', // ann
    '仕掛けを開けてもらえないかな？', // ann
    '残念だけど、地下への仕掛けだけは僕には動かせない。', // architect
    'アレだけちょっと特殊でね、', // architect
    '騎士団と一緒に来たライラという女性だけが開閉できる。', // architect
    'そっか…、', // ann
    '代わりにはならないかもしれないけど、', // architect
    'これを。', // architect
    'これは？', // ann
    'これで仕掛けを動かせば、屋上への扉なら開けられる。', // architect
    '仕掛けの動かし方は、せっかくだから考えてみてくれ。', // architect
    'ありがとう！' // ann
  ],
  item: '簡素な鍵',
  started: [
    '仕掛けの動かし方は、せっかくだから考えてみてくれ。' // architect
  ],
  solved: [
    '仕掛けは解けたようだね。', // architect
    '地下へも行きたいのなら、ライラという女性を探すといい。' // architect
  ],
  tweet: [
    'これが仕掛けね', // jaquelyn
    'アンに解けるの？', // francisca
    '頑張って！', // jaquelyn
    'やった！' // ann
  ]
}
export const allsRight = {
  start: [
    'ん？', // zi
    'ここへの扉は閉まっていたはずだが…、', // zi
    'え！ドラゴン！？', // ann
    '竜に会うのは初めてか？', // zi
    'う、うん。', // ann
    'びっくりした。', // ann
    '私は竜族のズィ。', // zi
    '驚かせてしまったのなら申し訳ない。', // zi
    'この国に竜族が居るなんて。', // ann
    'この通り、居る。', // zi
    '遠い昔のこと、この地では竜族と人間が共存していた。', // zi
    '二つの種族の間で戦争が起き、破れた竜族はこの地を去った。', // zi
    'よくある話だ。', // zi
    'だが、わずかだが私のようにこの地に残った者もいる。', // zi
    'なるほど。', // ann
    'あなたはどうしてここに残ったの？', // ann
    'この地の神を信仰しているからだ。', // zi
    '神は竜も人も区別せず、', // zi
    '私のことも平等に見守っておられる。', // zi
    'この通り私はここで、なんのこともなく、ただ平穏に過ごしている。', // zi
    'そうなんだ。', // ann
    '他に残った竜族も、人の居ないところで暮らしているの？', // ann
    '多くはそうだ。', // zi
    'この地に残った竜族の多くは人里離れて静かに暮らしているが、', // zi
    'そうでないものもいる。', // zi
    '例えばお前たちがこの地下に封じたソンベルクという竜だ。', // zi
    'お前たちもやつを倒しに来たんだろう？', // zi
    'ええと、まあ、はい。', // ann
    '私に気を遣う必要はない。', // zi
    'やつは我々から見ても単なる荒くれ者。', // zi
    'お前たちがやつを殺そうとなんとも思わん。', // zi
    'しかし、ソンベルクは大型の竜。', // zi
    'お前たちが勝てる望みは薄いだろう。', // zi
    '昔の人間はどうやってドラゴンに勝ったんですか？', // ann
    '簡単に言えば「技術」だ。', // zi
    '人間は特別な武器や道具を作って竜との力の差縮めた。', // zi
    '例を挙げるなら、この神殿に封じられている聖剣カリブルヌスがその一つだ。', // zi
    'あの剣は紛れもなく我々にとって脅威だ。', // zi
    '聖剣カリブルヌス…、', // ann
    'その剣があれがあればソンベルクを倒せる？', // ann
    '望みはあるだろう。', // zi
    '王たちは知らないのかな、その剣のこと。', // ann
    '知っているはずだ。', // zi
    'だがあの剣は竜族のニッケが封じている。', // zi
    '持ち出すことは叶わない。', // zi
    'そうなんだ。', // ann
    'それって何とかならない？', // ann
    'そのニッケにお願いして、貸してもらえないかな。', // ann
    'すまない。', // zi
    'お前たちがソンベルクを殺そうと気にしないとは言ったが、', // zi
    '積極的に手を貸すつもりでもない。', // zi
    'そっか…。', // ann
    '困ったな…。', // ann
    '…。', // zi
    'ニッケと話す機会くらいはつくろう。', // zi
    '話す機会？', // ann
    'ニッケは普段姿を消している。', // zi
    '人間が呼びかけても応じないだろう。', // zi
    '私から伝言を預けるとしよう。', // zi
    '助かる！', // ann
    '少し準備が必要だ。', // zi
    '準備？', // ann
    'ケルーネの羽根を#{KELUNNE_COUNT}枚、集めてきてくれ。', // zi
    'それを使って伝言を作る。', // zi
    '伝言を作る…？', // ann
    'よく分からないけど分かった！集めてくるね。' // ann
  ],
  solve: [
    '集めてきたよ！', // ann
    'よし、確かに。', // zi
    'ちょっと待っていてくれ。', // zi
    'できた。', // zi
    'これは…？瓶？', // ann
    '瓶に言葉の煙を詰めた。', // zi
    'え、よく分かんない。', // ann
    '言葉の煙って？', // ann
    '竜族の言葉は煙に込めることができる。', // zi
    'すごい、ほんとに…？', // ann
    '聖剣の近くで、この瓶の栓を抜け。', // zi
    '私の言葉がニッケに届くはずだ。', // zi
    '分かった、ありがとう！' // ann
  ],
  solved1: [
    '聖剣の近くで、言葉の煙の瓶の栓を抜け。', // zi
    '私の言葉がニッケに届くはずだ。' // zi
  ],
  solved2: [
    'すべて世はこともなし。', // zi
    'この通り私はここで、なんのこともなく、ただ平穏に過ごしている。' // zi
  ]
}
export const calibur = {
  start: [
    'よし、竜族の言葉の煙を出すよ。', // ann
    'やあ、', // nikke
    '僕を呼んだのはキミだね？', // nikke
    'えっと、ニッケさん？', // ann
    'うん。', // nikke
    'ズィからの伝言を聞いたよ。', // nikke
    'キミは？', // nikke
    '私はアン。', // ann
    'アン、キミはこの剣が欲しいんだね？', // nikke
    'そう！貸してくれないかな？', // ann
    'この剣はね、結構凄いんだ。', // nikke
    '僕たち竜族にとっては中々怖いモノだよ。', // nikke
    '人に返すにはちょっと勇気がいるねー。', // nikke
    'うーん、そこをなんとか…。', // ann
    'どうしても？', // nikke
    'どうしても。', // ann
    '何に使うの？', // nikke
    'えーと、', // ann
    'これで竜を殺すのかい？', // nikke
    'うーん…、', // ann
    '教えてね。', // nikke
    'ソンベルクを倒す。', // ann
    'ソンベルクを殺すんだね。', // nikke
    '可哀想なソンベルク。', // nikke
    'やんちゃな奴だけど僕の友達だよ？', // nikke
    'そうなの？', // ann
    '十年も封印されて、', // nikke
    'やっと目が覚めたっていうのに、', // nikke
    '殺されちゃうんだね。', // nikke
    'そう言われても…、', // ann
    '可哀想なソンベルク。', // nikke
    '…。', // ann
    'まあでも仕方ないね。', // nikke
    'ここは今は人間の地だ。', // nikke
    '残った竜族は虐げられても文句は言えない。', // nikke
    '虐げるつもりはないんだけど…、', // ann
    'ソンベルクは説得したら王や王国を襲うのをやめるかな？', // ann
    'やめないと思う。', // nikke
    'そうなんだ…。', // ann
    '聖剣だったね。', // nikke
    'よし、', // nikke
    'うん、返すよ。', // nikke
    '人が作ったものだしね。', // nikke
    '人に返すのがフェアだ。', // nikke
    'そしてそれをどう使おうとキミたちの自由だ。', // nikke
    'いいの！？', // ann
    'うん。', // nikke
    'でも返す相手が人なら誰でもいいとは思ってない。', // nikke
    '見て、', // nikke
    'これを作った人間は間違いなく強いヤツだ。', // nikke
    'キミはこれを持つにふさわしいかな？', // nikke
    '試してもいいよね？', // nikke
    '試すって？', // ann
    '僕と戦うんだよ。', // nikke
    'なるほど。', // ann
    'それでいいよね？', // nikke
    '準備はできてる？' // nikke
  ],
  talked: [
    '準備はできた？' // nikke
  ],
  option: ['はい', 'いいえ'],
  cancel: [
    'じゃあ準備ができたらまた来てね。' // nikke
  ],
  solve: [
    'うわ、', // nikke
    '凄く強いんだね。', // nikke
    'まいったよ。降参だ。', // nikke
    'キミたち、僕が小さいからって油断しないんだもん。', // nikke
    'さて、剣ね。', // nikke
    '持っていって。', // nikke
    'ありがとう。', // ann
    'うん、よく似合ってるよ。', // nikke
    'そうかな。', // ann
    'うん。', // nikke
    'さて、', // nikke
    '剣を見張る必要もなくなったし、', // nikke
    '僕もどこかに旅に出ようかな。', // nikke
    'あ、', // nikke
    'ところでキミたちさ、', // nikke
    '何かズルしてない？', // nikke
    'え？', // ann
    'なんかキミたちが近くに居ると、時間が歪むのを感じるよ…。', // nikke
    '…、', // ann
    'まあいいか、', // nikke
    'それもキミたち人間の作った力だろうしね。' // nikke
  ]
}
export const lute = {
  unavailable: [
    'あのー…、', // ann
    '寝てるみたい。' // ann
  ],
  start: [
    'こんにちはお嬢さん。', // lyla
    '格好良い剣を持っているね。', // lyla
    'それでドラゴンでも倒しにきたのかい？', // lyla
    'そうなんだけど、', // ann
    '地下へ行く方法が見つからなくて…、', // ann
    'ああ、なるほどね。', // lyla
    'キミが探しているのはこの女神像だよ。', // lyla
    'ほんと！？', // ann
    'ってことはライラさん？', // ann
    'いかにも。', // lyla
    '石掘りの男に聞いたのかな？', // lyla
    'あなたしか仕掛けを動かせないって。', // ann
    'そうだよ。', // lyla
    '開けてほしいの？', // lyla
    '開けてほしい！', // ann
    '開けたら何してくれる？', // lyla
    'えーと、', // ann
    '何でも！', // ann
    '何でも？', // lyla
    'うん。', // ann
    'そう言われると特にしてもらいたいことないな…。', // lyla
    'そっか、', // ann
    'じゃあ開けてくれる？', // ann
    'いや、何かはしてもらわないと。', // lyla
    'えぇ…。', // ann
    'じゃあ、うーん、', // ann
    'リンゴでも集めてきます？', // ann
    'お、いいね。', // lyla
    'それで！', // lyla
    'ちゃんと綺麗なやつを頼むよ。', // lyla
    '任せて！' // ann
  ],
  started: [
    'リンゴはまだかな？', // lyla
    '楽しみにしてるよ。' // lyla
  ],
  solve1: [
    'リンゴ集めてきたよ！', // ann
    'お、いいね。' // lyla
  ],
  answer: [
    ['うん、美味しい。', 'ありがとう。'], // lyla
    ['うーん、あんまり美味しくないリンゴだね。', 'まあ、仕方ないか。'] // lyla
  ],
  solve2: [
    'じゃあ約束だね、', // lyla
    '開けるよ。', // lyla
    'どういう仕掛けなの？', // ann
    'リュートを鳴らすんだ。', // lyla
    'その音に反応して地下への扉が開く。', // lyla
    'へー。', // ann
    'じゃあ、聞いていてね。' // lyla
  ],
  solve3: [
    'さて、開いたはずだよ。', // lyla
    'すごい！', // ann
    'どうして音で仕掛けが動くの？', // ann
    '私もよく分からないんだよね。', // lyla
    '私が女神さま大好きだからかな。', // lyla
    'どういうこと？', // ann
    '同じ音を出しても、ちゃんと心をこめてないと開かないんだ。', // lyla
    '女神さまに向けて、しっかり心を込めて弾けば開くんだ。', // lyla
    'きっと大昔にこの仕掛けを作った人も、女神さまが大好きだったのさ。', // lyla
    'それは素敵だね。', // ann
    'お嬢さんが持ってきてくれたリンゴだってそうだ。', // lyla
    'かなり美味しいよ。', // lyla
    'ちゃんと私のことを思って持ってきくれたに違いない。', // lyla
    'へへ。', // ann
    'さあ、', // lyla
    'じゃあ気をつけて行っておいで。', // lyla
    'ありがとう！' // ann
  ],
  option: ['拾う', 'いらない'],
  apple: '『リンゴ』を手に入れた',
  tweet: 'リンゴが5つ集まったね'
}
export const dragonKiller = {
  soldier: [
    'ドラゴンは…、我々が想定していたよりもずっと強力だった…。', // soldier1
    '十年前、王はどうやってアイツに勝ったというのだ…。', // soldier2
    '王を助けに行きたいが…、体が動いてくれない…。' // soldier3
  ],
  block: [
    'ちょっと、怪我人に声もかけないっていうの？' // francisca
  ],
  start: [
    '大丈夫ですか！？', // ann
    'お前たちは…。', // ethel
    'ドラゴンにやられたんですね？', // ann
    'そうだ…。', // ethel
    '兄を…、', // ethel
    'エドガーを助けに来たのか？', // ethel
    'はい。', // ann
    'あなたは、王弟？', // ann
    '俺のことはいい。', // ethel
    'エドガーと、ドラゴンはこの先だ、', // ethel
    'でも、ひどい傷、', // ann
    '構うな。', // ethel
    '彼は今、独りで戦っている。', // ethel
    '兄を…、', // ethel
    '兄を頼む…。' // ethel
  ],
  started: [
    'あの、どこかで会ったことないです…？', // ann
    '無駄話をしている場合ではないはずだ。' // ethel
  ],
  confirm: [
    'この先が最深部みたいだけど。' // francisca
  ],
  confirmOption: ['先に進む', 'やめておく'],
  king1: [
    'エドガーよ、貴様自ら現れるとは、良い度胸だ。', // sonberk
    'この俺を十年も封じておきながら、ただで帰れるとは思っていまいな。', // sonberk
    'それとも、十年前のように俺を倒せるとでも思っているのか？', // sonberk
    'そこまで慢心してはおらん。', // king
    'ソンベルクよ、一つ聞かせてくれ。', // king
    '今ここで私の首を差し出せば、お前の怒りは鎮まるか？', // king
    'この期に及んで貴様の王国を心配しているな？', // sonberk
    '安心しろ。', // sonberk
    '貴様が今ここにいること、', // sonberk
    '弟のエゼルバルドは約束を果たしたも同然。', // sonberk
    '約束通り貴様の首で王国のことは見逃してやろう。', // sonberk
    'そうか。', // king
    '弟とどのような交渉をしたのかは存ぜぬが、それこそ私の望むところだ。', // king
    'さあ、気の済むまで私を焼くがよい。' // king
  ],
  king2: [
    'ぐわっ！', // king
    '！', // ann
    '急がないと！', // ann
    '…。', // king
    '大丈夫、気を失ってるだけ…！' // ann
  ],
  sonberk: [
    'ソンベルク！覚悟しなさい！', // ann
    '誰だ？', // sonberk
    '騎士共の生き残りじゃないな。', // sonberk
    '私たちはただの市民。', // ann
    'ただの市民がなんの用だ。', // sonberk
    '王を助けに来たとでも言うのか？', // sonberk
    'その通りよ！', // ann
    'ナメられたものだ。小娘ごときに何ができる？', // sonberk
    'あなたを倒す。', // ann
    'この剣でね。', // ann
    'その剣は…、', // sonberk
    '知っているぞ。', // sonberk
    '何故お前たちが持っている？', // sonberk
    'まあいい。', // sonberk
    '小娘ごときが剣を手にしたから何だという。', // sonberk
    '立ち去る気がないのなら相手になってやろう。', // sonberk
    '来い！' // sonberk
  ],
  solve: [
    'やった！倒した！', // ann
    'やったわね、アン。', // jaquelyn
    'なんとかね。', // francisca
    'よし、早く王や騎士団の皆を助けないと！', // ann
    'そうね。', // jaquelyn
    '後片付けが終わったら、私たちはさっさと姿を消そう。', // francisca
    'オーケー！' // ann
  ]
}
