// Requirement wise code

function budgetCalculator(headphone,mobile,computer){
  let h_price = 100 * headphone,
      m_price = 200 * mobile, 
      com_price = 1000 * computer, 
      totalAmount;

      totalAmount = h_price + m_price + com_price ;

      return totalAmount;
}

console.log(budgetCalculator(3 , 4 , 5));

//We can also use prompt function to solve this problem as a dynamic way . Thank you Ashik vaia.