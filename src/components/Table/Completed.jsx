import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Completed = () => {
  const data = [
    {
      id: 1,
      name: "Sam Altman",
      email: "samaltman123@gmail.com",
      profileLink: "https://www.linkedin.com/in/samaltman/",
      riskLevel: "Medium",
      actionReason: "Flagged",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Neil",
        email: "neil@onjuno.com"
      },
    },
    {
      id: 2,
      name: "Sameer Choubey",
      email: "sameerchoubey123@gmail.com",
      profileLink: "https://www.linkedin.com/in/sameerchoubey/",
      riskLevel: "High",
      actionReason: "Closed",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Pratik",
        email: "pratik@onjuni.com"
      },
    },
    {
      id: 3,
      name: "Adarsh Panikkar",
      email: "adarsh@onjuno.com",
      profileLink: "https://www.linkedin.com/in/adarshpanikkar/",
      riskLevel: "Low",
      actionReason: "Cleared",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Prasanth",
        email: "prasanth@onjuno.com"
      },
    },
    {
      id: 4,
      name: "Pratik Shetty",
      email: "pratik3@gmail.com",
      profileLink: "https://www.linkedin.com/in/pratikshetty/",
      riskLevel: "High",
      actionReason: "SOI required",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Rasleen Kaur",
        email: "rasleen@onjuno.com"
      },
    },
    {
      id: 5,
      name: "Elon Musk",
      email: "elon@twitterceo.com",
      profileLink: "https://www.linkedin.com/in/elonmusk/",
      riskLevel: "Low",
      actionReason: "Flagged",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Pratik Shetty",
        email: "pratik@onjuno.com"
      },
    },
    {
      id: 6,
      name: "Trina Kundu",
      email: "trina@onjuno.com",
      profileLink: "https://www.linkedin.com/in/trinakundu/",
      riskLevel: "Low",
      actionReason: "Closed",
      timeToClose: "14 days",
      createdOn: "12 Oct, 2023",
      actionTakenBy: {
        name: "Varun Deshpande",
        email: "varun@onjuno.com"
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
                <td className="py-2.5 px-4 border-b font-semibold">{item.actionReason}</td>
                <td className="py-2.5 px-4 border-b font-semibold">{item.timeToClose}</td>
                <td className="py-2.5 px-4 border-b font-medium text-gray-500">{item.createdOn}</td>
                <td className="py-2.5 px-4 border-b">
                  <div>
                    <p className='font-semibold'>{item.actionTakenBy.name}</p>
                    <p className='text-xs font-medium text-gray-500'>{item.actionTakenBy.email}</p>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Completed