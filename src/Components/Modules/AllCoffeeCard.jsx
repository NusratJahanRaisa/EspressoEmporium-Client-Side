import CoffeeCard from './CoffeeCard';

const AllCoffeeCard = ({ setCoffees, coffees}) => {
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                coffees?.map(coffee=>
                 
                    <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
                )
            }
        </div>
    );
};

export default AllCoffeeCard;