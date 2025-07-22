import CoffeeCard from './CoffeeCard';

const AllCoffeeCard = ({coffeeData}) => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                coffeeData?.map(coffee=>
                 
                    <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
                )
            }
        </div>
    );
};

export default AllCoffeeCard;