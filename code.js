
var e = React.createElement;
var contacts = [
  {
    name:'Vasyliy',
    number:'12312312',
    email:'vail@mail.com'
  },
  {
    name:'Armen',
    number:'25534234',
    email:'armen@mail.com'
  },
  {
    name:'Dimon',
    number:'777 7777',
    email:'dimon@mail.com'
  }
];
var styles = {
  input:{
    display:'block',
    padding:'5px',
    margin:'2px',
    cursor:'pointer'
  },
  contactDiv:{
    margin:'2px',
    padding:'20px',
    border:'#eee solid 1px'
  },
  name:{
         margin:'20px auto',
         width:'300px'
       },
  container:{
          margin:'20px auto', 
          width:'960px'
        }
};
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    array: React.PropTypes.array.isRequired,
  },
  getInitialState : function() {
    return {
      isEdit : "none",
      isEditColor:'red',
      clickCount:0
    };
  },
 
   onNameClick: function(focusedForm, name) {
   this.setState({isEdit:'You are focused on '+name+'`s '+focusedForm+'!', isEditColor:'blue', clickCount:this.state.clickCount+1})
  },
  render: function() {
 var self = this;
    return (
        e('div', {style:styles.container},
          e('h2', {style:styles.name }, this.props.name),
          e('h4', {style:{color:this.state.isEditColor}}, this.state.isEdit),
          e('h4', {style:{color:'green'}}, this.state.clickCount),
            this.props.array.map(function(item){
              return e('div', {
                                style:styles.contactDiv
                              }, 
                  e('input', {
                              onFocus:function(){
                                                 self.onNameClick('name', item.name)
                                                },
                              style:styles.input,
                              value:item.name
                              }),
                  e('input', {
                              onFocus:function(){
                                                 self.onNameClick('number', item.name)
                                                },
                                style:styles.input, 
                                value:item.number
                              }),
                  e('input', { 
                              onFocus:function(){
                                                 self.onNameClick('email', item.name)
                                                }, 
                              style:styles.input,
                              value:item.email
                              })
                )
            })
          )
         
      )
    
  }
})



var rootElement = React.createElement(ContactItem,{name:'Contact Form', array:contacts});

ReactDOM.render(rootElement, document.getElementById('react-app')) //render react App from Html
