"use client"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Link from 'next/link';

const PendingButtons = ({id}) => {
  return (
    <>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">
        <CancelRoundedIcon />
      </button>
      <Link href={'/view/profile/'+id} className="bg-slate-400 text-white px-4 py-2 rounded-md mr-2">
        <InfoRoundedIcon />
      </Link>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">
        <CheckCircleRoundedIcon />
      </button>
    </>
  );
}

const ApprovedButtons = ({id}) => {
  return (
    <>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">
        <CancelRoundedIcon />
      </button>
      <Link href={'/view/profile/'+id} className="bg-slate-400 text-white px-4 py-2 rounded-md mr-2">
        <InfoRoundedIcon />
      </Link>
      <Link  href={'/view/messages/'+id} className="bg-cyan-600 text-white px-4 py-2 rounded-md mr-2">
        <MessageRoundedIcon />
      </Link>
    </>
  );
}

const Buttons = ({type, id}) => {
  return (
    <div className="flex justify-between">
        {type == "PENDING"? <PendingButtons id={id} />: <ApprovedButtons id={id} />}
      </div>
  )
}

const Card = ({ photoUrl, name, onReject, onApprove, type, userid }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={photoUrl} alt={name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h2 className="text-black text-xl font-semibold mb-2">{name}</h2>
      <Buttons type={type} id={userid}/>
    </div>
  );
};


export default function CardCollection (params){
    const cards = [
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"PENDING", "userid": "ojaosjoash"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"APPROVED", "userid": "a4s56d45a4d"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"PENDING", "userid": "78a7d8s97d9a"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"PENDING", "userid": "s54da4d5as4"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"APPROVED", "userid": "d87s98fg7d"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"APPROVED", "userid": "zc2x13zc1z2"},
      {"photoUrl":"/profile.jpg", "name":"Pedro - 26 años", "type":"APPROVED", "userid": "7w9q79qwe7"},
    ]
    return (
      <div className="container max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };