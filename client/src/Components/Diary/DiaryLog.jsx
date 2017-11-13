import React from 'react';
import DiaryLogMealEntry from './DiaryLogMealEntry.jsx';
import QuickAddButton from './QuickAddButton.jsx';
import AddFoodModalButton from './AddFoodModalButton.jsx';
import DiaryLogCategoryRow from './DiaryLogCategoryRow.jsx';



const DiaryLog = ({ mealType, data, handleAddFoodSubmit, handleQuickAddSubmit }) => {
  const header = mealType === 'Breakfast' || mealType === 'dailyTotal' ? (
    <tr>
      <th className="col-md-5" >{mealType}</th>
      <th className="col-md-1 nutrition-category" >Calories<br />(kcal)</th>
      <th className="col-md-1 nutrition-category" >Carbs<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Fat<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Protein<br />(g)</th>
      <th className="col-md-1 nutrition-category" >Sodium<br />(mg)</th>
      <th className="col-md-1 nutrition-category" >Sugar<br />(g)</th>
      <th className="col-md-1 " ></th> 
    </tr>)
    : (<tr><th className="col-md-5" >{mealType}</th></tr>)

  return (
    <tbody>
      { header }
      { data.foods.map(food => <DiaryLogMealEntry data={food} />) }
      <tr>
        <td>
          <AddFoodModalButton mealType={mealType} handleAddFoodSubmit={handleAddFoodSubmit} />
        </td>
        <td className="nutrient-column">{data.calories}</td>
        <td className="nutrient-column">{data.carbs}</td>
        <td className="nutrient-column">{data.fats}</td>
        <td className="nutrient-column">{data.protein}</td>
        <td className="nutrient-column">{data.sodium}</td>
        <td className="nutrient-column">{data.sugar}</td>
        <td className="nutrient-column"></td>
      </tr>
    </tbody>
  );
}


export default DiaryLog;