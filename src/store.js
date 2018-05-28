import { observable, action,computed } from 'mobx';
export default class Store{
    @observable initialArticles = [
        {
            title: 'test',
            summary: 'testfasdfasfasd',
            date: '2018-09-01',
            content: 'fsadfasdfasdfsad',
            labels: ['node']
        }
    ];

    @observable articles = this.initialArticles;

    @observable curArticle = {};

    @computed get labels() {
        let labels = [];
        this.articles.map(article=>{
            article.labels.map(label=>{
                labels.push(label)
            })
        })
        labels = [...new Set(labels)]
        return labels
    }

    @computed get labelArticles(){
        let labelArticles = [];
        this.labels.map(label=>{
            const articles = this.articles.filter(article=>{
                return article.labels.indexOf(label)!==-1
            })
            labelArticles.push({
                title: label,
                articles: articles
            })
        })
        return labelArticles;
    }

    @computed get archives() {
        let archives = [];
        this.articles.map(item=>{
            let date = item.date.split('-')[0];
            let singleYear = archives.filter(archive=>archive.title===date);
            if(singleYear[0]){
                singleYear[0].articles.push(item)
            }else{
                archives.push({
                    title: date,
                    articles: [item]
                })
            }
        })
        return archives;
    }

    @action changeCurArticle = (obj)=>{
        for(let key in obj){
            this.curArticle[key] = obj[key]   
        }
        console.log(this.curArticle)
    }

    @action filterArticle = (value)=>{
        this.articles = this.initialArticles;
        if(!value) return;
        this.articles = this.articles.filter(item=>{
            const {title,content} = item;
            return title.indexOf(value)!==-1 || content.indexOf(value)!==-1;
        })
    }

    @action  addArticle = (article)=>{
        this.initialArticles.push(article);
    }

    @action editorArticle = (id,article)=>{
        this.articles.map(item=>{
            if(item.title===id){
                item = article;
            }
            return article;
        })
    }
}