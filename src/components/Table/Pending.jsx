import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Pending = () => {
  const data = [
    {
      id: 1,
      name: "Sam Altman",
      email: "samaltman123@gmail.com",
      profileLink: "https://www.linkedin.com/in/samaltman/",
      riskLevel: "Medium",
      reason: "IP Change",
      isQueueFor: "4 days",
      createdOn: "12 Oct, 2023",
      previouslyReviewed: {
        status: true,
        date: "23 Aug, 2023"
      },
    },
    {
      id: 2,
      name: "Sameer Choubey",
      email: "sameerchoubey123@gmail.com",
      profileLink: "https://www.linkedin.com/in/sameerchoubey/",
      riskLevel: "High",
      reason: "FIFO",
      isQueueFor: "4 days",
      createdOn: "12 Oct, 2023",
      previouslyReviewed: {
        status: false,
        date: null
      },
    },
    {
      id: 3,
      name: "Adarsh Panikkar",
      email: "adarsh@onjuno.com",
      profileLink: "https://www.linkedin.com/in/adarshpanikkar/",
      riskLevel: "Low",
      reason: "IP Change",
      isQueueFor: "5 days",
      createdOn: "12 Oct, 2023",
      previouslyReviewed: {
        status: false,
        date: null
      },
    },
    {
      id: 4,
      name:"Pratik Shetty",
      email:"pratik3@gmail.com",
      profileLink:"https://www.linkedin.com/in/pratikshetty/",
      riskLevel:"High",
      reason:"FIFO",
      isQueueFor:"5 days",
      createdOn:"12 Oct, 2023",
      previouslyReviewed:{
        status:true,
        date:"12 Sep, 2023"
      },
    },
    {
      id: 5,
      name:"Elon Musk",
      email:"elon@twitterceo.com",
      profileLink:"https://www.linkedin.com/in/elonmusk/",
      riskLevel:"Low",
      reason:"FIFO",
      isQueueFor:"5 days",
      createdOn:"12 Oct, 2023",
      previouslyReviewed:{
        status:true,
        date:"12 Sep, 2023"
      },
    },
    {
      id: 6,
      name:"Trina Kundu",
      email:"trina@onjuno.com",
      profileLink:"https://www.linkedin.com/in/trinakundu/",
      riskLevel:"Low",
      reason:"FIFO",
      isQueueFor:"5 days",
      createdOn:"12 Oct, 2023",
      previouslyReviewed:{
        status:true,
        date:"12 Sep, 2023"
      },
    }
  ]


  return (
    <div className='overflow-hidden rounded-t-xl'>
      <table className="min-w-full bg-white text-sm">
        <thead className=''>
          <tr className='font-medium bg-gray-100'>
            <td className="py-4 px-4 border-b">User</td>
            <td className="py-4 px-4 border-b">
              <div className='flex items-center gap-3'>
                <span>Risk Level</span>
                <div className='flex flex-col'>
                  <MdOutlineKeyboardArrowUp size={16} />
                  <MdOutlineKeyboardArrowDown size={16} className='-mt-2 text-gray-400' />
                </div>
              </div>
            </td>
            <td className="py-4 px-4 border-b">Trigger reason</td>
            <td className="py-4 px-4 border-b">
              <div className='flex items-center gap-3'>
                <span>In Queue for</span>
                <div className='flex flex-col'>
                  <MdOutlineKeyboardArrowUp size={16} />
                  <MdOutlineKeyboardArrowDown size={16} className='-mt-2 text-gray-400' />
                </div>
              </div>
            </td>
            <td className="py-4 px-4 border-b">
              <div className='flex items-center gap-3'>
                <span>Date Added on</span>
                <div className='flex flex-col'>
                  <MdOutlineKeyboardArrowUp size={16} />
                  <MdOutlineKeyboardArrowDown size={16} className='-mt-2 text-gray-400' />
                </div>
              </div>
            </td>
            <td className="py-4 px-4 border-b">Previously reviewed</td>
          </tr>
        </thead>
        <tbody className='border text-base border-gray-300'>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td className="py-2.5 px-4 border-b">
                  <div>
                    <p className='font-semibold pb-1'>{item.name}</p>
                    <p className='text-xs font-medium text-gray-500'>{item.email}</p>
                  </div>
                </td>
                <td className="py-2.5 px-4 border-b">
                  <div className='flex gap-2 items-center'>
                    <div className={`h-2.5 w-2.5 rounded-full ${item.riskLevel === "High" ? "bg-red-800" : item.riskLevel === "Medium" ? "bg-yellow-700" : "bg-green-800"}`}></div>
                    <p className={`font-semibold ${item.riskLevel === "High" ? "text-red-800" : item.riskLevel === "Medium" ? "text-yellow-700" : "text-green-800"}`}>{item.riskLevel}</p>
                  </div>
                </td>
                <td className="py-2.5 px-4 border-b font-semibold">{item.reason}</td>
                <td className="py-2.5 px-4 border-b font-semibold">{item.isQueueFor}</td>
                <td className="py-2.5 px-4 border-b font-medium text-gray-500">{item.createdOn}</td>
                <td className="py-2.5 px-4 border-b">
                  {
                    item.previouslyReviewed.status ? <div>
                      <p className='font-semibold'>Yes</p>
                      <p className='text-xs font-medium text-gray-500'>{item.previouslyReviewed.date}</p>
                    </div> :
                      <div>
                        <p className='font-semibold'>No</p>
                      </div>
                  }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Pending;