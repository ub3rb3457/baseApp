import React, {Component} from 'react'

class Cache extends Component {
    constructor(props){
        super(props)
        this.state = {
            cachedData: null,
            cacheStore: window.localStorage,
            JSON
        }
        this.saveCache = this.saveCache.bind(this);
        this.clearCache = this.clearCache.bind(this);
        this.checkCache = this.checkCache.bind(this);
        this.loadCache = this.loadCache.bind(this);

        this.loadCache()
    }
    saveCache(key = null){
        this.state.cacheStore.setItem('cached', ) 
    }
    clearCache(key = null){
        if( key === null) { 
            this.state.cacheStore.clear()
        } else {
            this.state.cacheStore.removeItem(key)
        }
    }
    checkCache(){
        const result = this.state.cacheStore.getItem('cached') 
        if (result !== null){ this.setState({cached: JSON.parse(result)}) }   
    }
    loadCache(){
        const result = this.checkCache()
        if(result !== false){
          this.setState({ cachedData: JSON.stringify(result) })        
        }
    }
    render(){

    }
}
