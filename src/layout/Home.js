import React, { Component } from 'react';
import Articles from '../components/Articles.js';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
            {
                title: 'NGUI源码学习——UISprite-1',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: `好久没有写学期总结了。2015年秋季学期是我研究生阶段的倒数第二个学期，时间线上主要由实习、找工作、学（zhuang）习（bi）和写论文组成。由于这学期找完工作之后导师没有给我安排什么实验室的工作，所以有比较大段的自由时间可以支配。在外人看来我好像这学期过得很悠闲，实际上是在自己的合理安排下过得非常充实，现在写篇简短的文章总结一下。
                
                关于实习
                本学期比较特殊，要从七八两个月份的实习开始说起，而这次实习也可以说是我择业的转折点。本来原先在实验室一直从事的是Web前端开发，在这个领域也小有建树，但不知道从什么时候起，早些年内心里埋下的游戏开发的种子就开始生根发芽快速成长，直到15年的五月份找实习时，开始打定主意抛弃前端，只找游戏开发的岗位，而且是只找广州和深圳的游戏开发岗。如此一来，其实真正理想的就只有腾讯和网易游戏两家可选。拿许总的话讲，就是“谈了多年的女孩到谈婚论嫁的时候，突然发现其实深爱的是另一个人”“自己给自己挖了一个巨大的坑”。突然的转行导致找实习乃至后面正式找工作都非常不顺，网易游戏是简历直接挂，腾讯游戏则是二面被刷。所幸后来拿到了多益网络的offer，抱着刷个游戏公司实习经历的想法，便果断放弃阿里的前端内推offer，义无反顾地投身到游戏开发的行业。
                
                许多同学在其他互联网公司实习后都觉得没什么太大收获，但是我却在多益实习收获了许多。技术方面，是提高了Python和Cocos2d-x引擎的熟练度，项目经历让我第一次真正接触到了游戏真机性能优化的过程；项目方面，积累了项目管理和带小团队（3程序3策划）的经验，产出了2D游戏作品《跳跳格鲁特》（演示视频【密码8mm5】），以及利用下班时间个人打造的日式3D RPG demo《Fantasy Adventure》（演示视频【密码dg67】），这两个作品也成为后面找工作时简历打动面试官的重要筹码；人脉方面，结识了一帮热爱游戏的志同道合的朋友，即使实习结束后也还经常联系交流，其中甚至有好几位还即将成为我未来的同事。当然，公司待我们不薄，我也可以很负责任地为多益正一下名，基本上没有知乎上说的那么离谱，具体情况嘛，想去多益的倒是可以私底下找我了解。总而言之，多益实习的生活丰富多彩，确实是一段难忘的经历。
                
                关于找工作
                实习结束回校之后，马上就开始投身到找工作的浪潮，目标依旧是腾讯和网易游戏。然而即使认真准备了C++、算法、Cocos2d-x源码、Unity3D的深入知识，即使有了游戏公司实习经历的光环，即使有两个较为成型游戏作品的加持，面对腾讯面试依旧是浑身使不上力的感觉，依旧挂在二面。所幸网易游戏看得起我，给了第一份理想的offer，让我解了游戏开发道路的后顾之忧。后来又经贵人相助，得到了直面腾讯天美的机会，几经折腾最终是拿到了理想公司的理想部门的理想岗位。到国庆，终于华丽转身，找工作尘埃落定。当然，整个过程就只找了两家公司，没有体验过offer收割机的快感，也算是小小的遗憾。
                
                自由学习期
                可能是因为我的offer是大转行，找完工作后导师也没有安排什么任务给我，所以国庆过后两个月开始进入了一段相对较长的自由学（zhuang）习（bi）期。这段时期就是看书看书再看书，看似悠哉，其实产出还是比较大的，比如：
                
                看完《Windows游戏编程大师技巧（第2版）》
                看完《DirectX 9.0 3D游戏开发编程基础》
                看完《3D数学基础：图形与游戏开发》
                看完《武器屋》
                看完《圣剑传说》
                看完《游戏设计的100个原理》
                看完《Web全栈工程师的自我修养》
                看一部分《网络游戏核心技术与实战》
                看一部分DirectX 11 Tutorial
                其他杂七杂八的资料……
                关于实验室培训
                学习期间，大概是导师看我实在太闲，便让我开始培训实验室一批新人Web前端。早在两年以前，我便在Github上建立了ELWG前端学习项目，旨在推行一套比较规范的流程，来作为实验室一代又一代新人的Web前端入门培训。趁着这一次机会，我精练了整个前端培训项目，再加入一些后端的知识，形成了新的培训项目Web系统导论。在此基础上，本学期我在实验室一共开了8次课（其中3次后端课由屌刘同学主讲），并有7位新人培训毕业上了课程的英雄榜。
                
                当然，带新人之余也不能忘了实验室中坚力量的培养。做完新人培训之后，经过一番酝酿终于收了两个真正意义上的徒弟（邱邱和刘贵）。我在实验室所剩时间不多，现在又转行不再做Web前端，因此希望在毕业前能够将他们培养成前端大神兼接班人。既然是要往大神方向培养，那就得按照大神的标准来训练，打字、编辑器、计算机科学素养、前端基础、前端进阶、后端基础、设计基础等等一个都不能少。如今两个徒弟按照我初步制定的前端大神培养计划稳步成长，我内心也甚是欣慰。
                
                除了实验室这两条培养主线之外，还有许许多多其他的带新人支线，比如带一位新生学C#、面向对象和Unity3D，带点团队移动组两位新人学入门前端，协同两位徒弟开办了若干次技术交流会等等。虽然事情都比较小，但也要分散不少精力去备课，设计教程和题目，心虽累，但仍收获颇丰，乐在其中。
                
                关于毕业论文
                到了十二月份，就开始考虑写论文的事情了。早在写本科毕业论文的时候，就受尽了垃圾Word的折磨，比如混乱的多级标题、低效率的多级交叉引用、经常出问题的目录生成等等。同理，配套的画图工具Visio也是用户体验特别差。既然是程序员，那写论文最好也要按照程序员的基本法。一般科研界的论文用的是Latex，而程序员则惯用markdown。于是我在前人的基础上推陈出新，建立了一个开源项目hust-graduation-thesis-pandoc可以使用markdown来华科的毕业论文，具体可以参见我之前的博文《使用markdown来写毕业论文》。Anyway，Word辣鸡，Visio辣鸡。
                
                Markdown在手，写起论文正文自然专注，正文还可以按章节拆分成多个md文件，用Git做版本控制，用coding.net做私有仓库托管。画图用ProcessOn，打开浏览器即用，随时云端存储，又能导出矢量PDF，基本上可以抛弃Visio。绘制表格可以用TablesGenerator在线可视化编辑再生成Latex粘贴到正文。交叉引用用\label和\ref设置，文献引用则用Google学术复制出bibtex来管理。经过了一个月的实践考验，学期结束的时候论文完成度已经达到90%，这套解决方案被证明是可行的，撰写体验也是愉悦的。
                
                关于新版博客
                新版博客大概计划在11月，但实施起来已经是寒假在家的时候了。这一次博客改版为了兼容最新版本的Hexo3（老版仅能支持Hexo2是一大痛点），几乎推翻了原有主题raytaylorism的所有设计，UI上采用全新的Material Design风格，内部结构和配置也重写以提高稳定性。大家看到这篇总结的时候，正是新版博客第一次正式亮相，也意味着hexo主题raytaylorism开始进入内测阶段（目前内测人员已招募完毕）。在内测过程中，我还会继续完善和优化这个项目，并计划推出全新的个人简介页面，等一两周之后再在Github上发布主题，敬请期待。
                
                结语
                回首上一学期，总体来说还是过得比较愉快和充实。下学期是研究生阶段的最后一个学期，除了正常的修改论文和答辩之外，基本上也没什么事了，所以计划还是以学习为主，毕业旅行为辅。抓紧最后的大段自由时光多打好技术基础，将会是下学期的主旋律。`
            },
            {
                title: 'NGUI源码学习——UISprite-2',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: `好久没有写学期总结了。2015年秋季学期是我研究生阶段的倒数第二个学期，时间线上主要由实习、找工作、学（zhuang）习（bi）和写论文组成。由于这学期找完工作之后导师没有给我安排什么实验室的工作，所以有比较大段的自由时间可以支配。在外人看来我好像这学期过得很悠闲，实际上是在自己的合理安排下过得非常充实，现在写篇简短的文章总结一下。
                
                关于实习
                本学期比较特殊，要从七八两个月份的实习开始说起，而这次实习也可以说是我择业的转折点。本来原先在实验室一直从事的是Web前端开发，在这个领域也小有建树，但不知道从什么时候起，早些年内心里埋下的游戏开发的种子就开始生根发芽快速成长，直到15年的五月份找实习时，开始打定主意抛弃前端，只找游戏开发的岗位，而且是只找广州和深圳的游戏开发岗。如此一来，其实真正理想的就只有腾讯和网易游戏两家可选。拿许总的话讲，就是“谈了多年的女孩到谈婚论嫁的时候，突然发现其实深爱的是另一个人”“自己给自己挖了一个巨大的坑”。突然的转行导致找实习乃至后面正式找工作都非常不顺，网易游戏是简历直接挂，腾讯游戏则是二面被刷。所幸后来拿到了多益网络的offer，抱着刷个游戏公司实习经历的想法，便果断放弃阿里的前端内推offer，义无反顾地投身到游戏开发的行业。
                
                许多同学在其他互联网公司实习后都觉得没什么太大收获，但是我却在多益实习收获了许多。技术方面，是提高了Python和Cocos2d-x引擎的熟练度，项目经历让我第一次真正接触到了游戏真机性能优化的过程；项目方面，积累了项目管理和带小团队（3程序3策划）的经验，产出了2D游戏作品《跳跳格鲁特》（演示视频【密码8mm5】），以及利用下班时间个人打造的日式3D RPG demo《Fantasy Adventure》（演示视频【密码dg67】），这两个作品也成为后面找工作时简历打动面试官的重要筹码；人脉方面，结识了一帮热爱游戏的志同道合的朋友，即使实习结束后也还经常联系交流，其中甚至有好几位还即将成为我未来的同事。当然，公司待我们不薄，我也可以很负责任地为多益正一下名，基本上没有知乎上说的那么离谱，具体情况嘛，想去多益的倒是可以私底下找我了解。总而言之，多益实习的生活丰富多彩，确实是一段难忘的经历。
                
                关于找工作
                实习结束回校之后，马上就开始投身到找工作的浪潮，目标依旧是腾讯和网易游戏。然而即使认真准备了C++、算法、Cocos2d-x源码、Unity3D的深入知识，即使有了游戏公司实习经历的光环，即使有两个较为成型游戏作品的加持，面对腾讯面试依旧是浑身使不上力的感觉，依旧挂在二面。所幸网易游戏看得起我，给了第一份理想的offer，让我解了游戏开发道路的后顾之忧。后来又经贵人相助，得到了直面腾讯天美的机会，几经折腾最终是拿到了理想公司的理想部门的理想岗位。到国庆，终于华丽转身，找工作尘埃落定。当然，整个过程就只找了两家公司，没有体验过offer收割机的快感，也算是小小的遗憾。
                
                自由学习期
                可能是因为我的offer是大转行，找完工作后导师也没有安排什么任务给我，所以国庆过后两个月开始进入了一段相对较长的自由学（zhuang）习（bi）期。这段时期就是看书看书再看书，看似悠哉，其实产出还是比较大的，比如：
                
                看完《Windows游戏编程大师技巧（第2版）》
                看完《DirectX 9.0 3D游戏开发编程基础》
                看完《3D数学基础：图形与游戏开发》
                看完《武器屋》
                看完《圣剑传说》
                看完《游戏设计的100个原理》
                看完《Web全栈工程师的自我修养》
                看一部分《网络游戏核心技术与实战》
                看一部分DirectX 11 Tutorial
                其他杂七杂八的资料……
                关于实验室培训
                学习期间，大概是导师看我实在太闲，便让我开始培训实验室一批新人Web前端。早在两年以前，我便在Github上建立了ELWG前端学习项目，旨在推行一套比较规范的流程，来作为实验室一代又一代新人的Web前端入门培训。趁着这一次机会，我精练了整个前端培训项目，再加入一些后端的知识，形成了新的培训项目Web系统导论。在此基础上，本学期我在实验室一共开了8次课（其中3次后端课由屌刘同学主讲），并有7位新人培训毕业上了课程的英雄榜。
                
                当然，带新人之余也不能忘了实验室中坚力量的培养。做完新人培训之后，经过一番酝酿终于收了两个真正意义上的徒弟（邱邱和刘贵）。我在实验室所剩时间不多，现在又转行不再做Web前端，因此希望在毕业前能够将他们培养成前端大神兼接班人。既然是要往大神方向培养，那就得按照大神的标准来训练，打字、编辑器、计算机科学素养、前端基础、前端进阶、后端基础、设计基础等等一个都不能少。如今两个徒弟按照我初步制定的前端大神培养计划稳步成长，我内心也甚是欣慰。
                
                除了实验室这两条培养主线之外，还有许许多多其他的带新人支线，比如带一位新生学C#、面向对象和Unity3D，带点团队移动组两位新人学入门前端，协同两位徒弟开办了若干次技术交流会等等。虽然事情都比较小，但也要分散不少精力去备课，设计教程和题目，心虽累，但仍收获颇丰，乐在其中。
                
                关于毕业论文
                到了十二月份，就开始考虑写论文的事情了。早在写本科毕业论文的时候，就受尽了垃圾Word的折磨，比如混乱的多级标题、低效率的多级交叉引用、经常出问题的目录生成等等。同理，配套的画图工具Visio也是用户体验特别差。既然是程序员，那写论文最好也要按照程序员的基本法。一般科研界的论文用的是Latex，而程序员则惯用markdown。于是我在前人的基础上推陈出新，建立了一个开源项目hust-graduation-thesis-pandoc可以使用markdown来华科的毕业论文，具体可以参见我之前的博文《使用markdown来写毕业论文》。Anyway，Word辣鸡，Visio辣鸡。
                
                Markdown在手，写起论文正文自然专注，正文还可以按章节拆分成多个md文件，用Git做版本控制，用coding.net做私有仓库托管。画图用ProcessOn，打开浏览器即用，随时云端存储，又能导出矢量PDF，基本上可以抛弃Visio。绘制表格可以用TablesGenerator在线可视化编辑再生成Latex粘贴到正文。交叉引用用\label和\ref设置，文献引用则用Google学术复制出bibtex来管理。经过了一个月的实践考验，学期结束的时候论文完成度已经达到90%，这套解决方案被证明是可行的，撰写体验也是愉悦的。
                
                关于新版博客
                新版博客大概计划在11月，但实施起来已经是寒假在家的时候了。这一次博客改版为了兼容最新版本的Hexo3（老版仅能支持Hexo2是一大痛点），几乎推翻了原有主题raytaylorism的所有设计，UI上采用全新的Material Design风格，内部结构和配置也重写以提高稳定性。大家看到这篇总结的时候，正是新版博客第一次正式亮相，也意味着hexo主题raytaylorism开始进入内测阶段（目前内测人员已招募完毕）。在内测过程中，我还会继续完善和优化这个项目，并计划推出全新的个人简介页面，等一两周之后再在Github上发布主题，敬请期待。
                
                结语
                回首上一学期，总体来说还是过得比较愉快和充实。下学期是研究生阶段的最后一个学期，除了正常的修改论文和答辩之外，基本上也没什么事了，所以计划还是以学习为主，毕业旅行为辅。抓紧最后的大段自由时光多打好技术基础，将会是下学期的主旋律。`
            },
            {
                title: 'NGUI源码学习——UISprite-3',
                date: '2017-06-17',
                labels: ['javascript','nodejs'],
                summary: 'UISprite是NGUI最基本的图片显示控件之一。它的基类UIBasicSprite承载了绝大多数的显示逻辑，本文记录其各种填充方法的原理。要显示一个sprite，必定会有一个管理sprite的图集，最后会记录UIAtlas的一些基本要点。\n【参考版本：NGUI 3.6.9】',
                content: `好久没有写学期总结了。2015年秋季学期是我研究生阶段的倒数第二个学期，时间线上主要由实习、找工作、学（zhuang）习（bi）和写论文组成。由于这学期找完工作之后导师没有给我安排什么实验室的工作，所以有比较大段的自由时间可以支配。在外人看来我好像这学期过得很悠闲，实际上是在自己的合理安排下过得非常充实，现在写篇简短的文章总结一下。
                
                关于实习
                本学期比较特殊，要从七八两个月份的实习开始说起，而这次实习也可以说是我择业的转折点。本来原先在实验室一直从事的是Web前端开发，在这个领域也小有建树，但不知道从什么时候起，早些年内心里埋下的游戏开发的种子就开始生根发芽快速成长，直到15年的五月份找实习时，开始打定主意抛弃前端，只找游戏开发的岗位，而且是只找广州和深圳的游戏开发岗。如此一来，其实真正理想的就只有腾讯和网易游戏两家可选。拿许总的话讲，就是“谈了多年的女孩到谈婚论嫁的时候，突然发现其实深爱的是另一个人”“自己给自己挖了一个巨大的坑”。突然的转行导致找实习乃至后面正式找工作都非常不顺，网易游戏是简历直接挂，腾讯游戏则是二面被刷。所幸后来拿到了多益网络的offer，抱着刷个游戏公司实习经历的想法，便果断放弃阿里的前端内推offer，义无反顾地投身到游戏开发的行业。
                
                许多同学在其他互联网公司实习后都觉得没什么太大收获，但是我却在多益实习收获了许多。技术方面，是提高了Python和Cocos2d-x引擎的熟练度，项目经历让我第一次真正接触到了游戏真机性能优化的过程；项目方面，积累了项目管理和带小团队（3程序3策划）的经验，产出了2D游戏作品《跳跳格鲁特》（演示视频【密码8mm5】），以及利用下班时间个人打造的日式3D RPG demo《Fantasy Adventure》（演示视频【密码dg67】），这两个作品也成为后面找工作时简历打动面试官的重要筹码；人脉方面，结识了一帮热爱游戏的志同道合的朋友，即使实习结束后也还经常联系交流，其中甚至有好几位还即将成为我未来的同事。当然，公司待我们不薄，我也可以很负责任地为多益正一下名，基本上没有知乎上说的那么离谱，具体情况嘛，想去多益的倒是可以私底下找我了解。总而言之，多益实习的生活丰富多彩，确实是一段难忘的经历。
                
                关于找工作
                实习结束回校之后，马上就开始投身到找工作的浪潮，目标依旧是腾讯和网易游戏。然而即使认真准备了C++、算法、Cocos2d-x源码、Unity3D的深入知识，即使有了游戏公司实习经历的光环，即使有两个较为成型游戏作品的加持，面对腾讯面试依旧是浑身使不上力的感觉，依旧挂在二面。所幸网易游戏看得起我，给了第一份理想的offer，让我解了游戏开发道路的后顾之忧。后来又经贵人相助，得到了直面腾讯天美的机会，几经折腾最终是拿到了理想公司的理想部门的理想岗位。到国庆，终于华丽转身，找工作尘埃落定。当然，整个过程就只找了两家公司，没有体验过offer收割机的快感，也算是小小的遗憾。
                
                自由学习期
                可能是因为我的offer是大转行，找完工作后导师也没有安排什么任务给我，所以国庆过后两个月开始进入了一段相对较长的自由学（zhuang）习（bi）期。这段时期就是看书看书再看书，看似悠哉，其实产出还是比较大的，比如：
                
                看完《Windows游戏编程大师技巧（第2版）》
                看完《DirectX 9.0 3D游戏开发编程基础》
                看完《3D数学基础：图形与游戏开发》
                看完《武器屋》
                看完《圣剑传说》
                看完《游戏设计的100个原理》
                看完《Web全栈工程师的自我修养》
                看一部分《网络游戏核心技术与实战》
                看一部分DirectX 11 Tutorial
                其他杂七杂八的资料……
                关于实验室培训
                学习期间，大概是导师看我实在太闲，便让我开始培训实验室一批新人Web前端。早在两年以前，我便在Github上建立了ELWG前端学习项目，旨在推行一套比较规范的流程，来作为实验室一代又一代新人的Web前端入门培训。趁着这一次机会，我精练了整个前端培训项目，再加入一些后端的知识，形成了新的培训项目Web系统导论。在此基础上，本学期我在实验室一共开了8次课（其中3次后端课由屌刘同学主讲），并有7位新人培训毕业上了课程的英雄榜。
                
                当然，带新人之余也不能忘了实验室中坚力量的培养。做完新人培训之后，经过一番酝酿终于收了两个真正意义上的徒弟（邱邱和刘贵）。我在实验室所剩时间不多，现在又转行不再做Web前端，因此希望在毕业前能够将他们培养成前端大神兼接班人。既然是要往大神方向培养，那就得按照大神的标准来训练，打字、编辑器、计算机科学素养、前端基础、前端进阶、后端基础、设计基础等等一个都不能少。如今两个徒弟按照我初步制定的前端大神培养计划稳步成长，我内心也甚是欣慰。
                
                除了实验室这两条培养主线之外，还有许许多多其他的带新人支线，比如带一位新生学C#、面向对象和Unity3D，带点团队移动组两位新人学入门前端，协同两位徒弟开办了若干次技术交流会等等。虽然事情都比较小，但也要分散不少精力去备课，设计教程和题目，心虽累，但仍收获颇丰，乐在其中。
                
                关于毕业论文
                到了十二月份，就开始考虑写论文的事情了。早在写本科毕业论文的时候，就受尽了垃圾Word的折磨，比如混乱的多级标题、低效率的多级交叉引用、经常出问题的目录生成等等。同理，配套的画图工具Visio也是用户体验特别差。既然是程序员，那写论文最好也要按照程序员的基本法。一般科研界的论文用的是Latex，而程序员则惯用markdown。于是我在前人的基础上推陈出新，建立了一个开源项目hust-graduation-thesis-pandoc可以使用markdown来华科的毕业论文，具体可以参见我之前的博文《使用markdown来写毕业论文》。Anyway，Word辣鸡，Visio辣鸡。
                
                Markdown在手，写起论文正文自然专注，正文还可以按章节拆分成多个md文件，用Git做版本控制，用coding.net做私有仓库托管。画图用ProcessOn，打开浏览器即用，随时云端存储，又能导出矢量PDF，基本上可以抛弃Visio。绘制表格可以用TablesGenerator在线可视化编辑再生成Latex粘贴到正文。交叉引用用\label和\ref设置，文献引用则用Google学术复制出bibtex来管理。经过了一个月的实践考验，学期结束的时候论文完成度已经达到90%，这套解决方案被证明是可行的，撰写体验也是愉悦的。
                
                关于新版博客
                新版博客大概计划在11月，但实施起来已经是寒假在家的时候了。这一次博客改版为了兼容最新版本的Hexo3（老版仅能支持Hexo2是一大痛点），几乎推翻了原有主题raytaylorism的所有设计，UI上采用全新的Material Design风格，内部结构和配置也重写以提高稳定性。大家看到这篇总结的时候，正是新版博客第一次正式亮相，也意味着hexo主题raytaylorism开始进入内测阶段（目前内测人员已招募完毕）。在内测过程中，我还会继续完善和优化这个项目，并计划推出全新的个人简介页面，等一两周之后再在Github上发布主题，敬请期待。
                
                结语
                回首上一学期，总体来说还是过得比较愉快和充实。下学期是研究生阶段的最后一个学期，除了正常的修改论文和答辩之外，基本上也没什么事了，所以计划还是以学习为主，毕业旅行为辅。抓紧最后的大段自由时光多打好技术基础，将会是下学期的主旋律。`
            }
            ]
        }
    }
    render(){
        return (
            <div className="container">
                <Articles articles={this.state.list}/>
            </div>
        )
    }
}
export default Home;