import Axios from 'axios'

class appManagement
{
    ingredients = {
        Bacon: 0,
        Salad: 0, 
        Cheese: 0,
        Meat: 0,
    };

    userUpdateBurger = false;
   
    axiosInstance = Axios.create({
        baseURL: 'https://burger-app-17e16.firebaseio.com/',
    });

    allOrders = null;
    retrievedAllOrders = false;

    getIngredients()
    {
        return this.ingredients;
    }
    retrieveIntialIngridents(cb)
    {
        this.axiosInstance.get('/Ingredients.json')
        .then((response)=>{
            console.log(response)

            let retrieveIngredients = {
                Bacon: response.data.Bacon,
                Salad: response.data.Salad, 
                Cheese: response.data.Cheese,
                Meat: response.data.Meat,
            }
            console.log("retrieveIngredients " + retrieveIngredients)
            console.log(retrieveIngredients)
            this.ingredients = retrieveIngredients; 
            cb(this.ingredients)           
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })

    }

    allOrdersretrieval(cb)
    {
        this.axiosInstance.get('/order.json')
        
        .then((response)=>{
            this.allOrders = response.data
            this.retrievedAllOrders = true
            cb()
        })

        .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    setIngredients(selectedIngredients)
    {
        this.ingredients = selectedIngredients;
        this.userUpdateBurger = true;
    }
    Save_Order = () =>{
        let order = {
            ingredients: this.ingredients,
            deliveryMethod: "Collection",
            name: "Thuso Tshishonga",
            priority: "Highest priority",
            time: new Date().toLocaleString()
        }
        
        this.axiosInstance.post('/order.json', order).then((response) =>{
            console.log('post', response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
}

export default appManagement