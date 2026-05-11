"use client"
import { useEffect, useState } from "react";
import { ArrowRight, Clock, DollarSign, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { parseCookies } from "nookies";

interface RequestProps {
  id: string;
  title: string;
  description: string;
  user: UserType;
  category: CategoryType;
  proposal: ProposalType;
  taxa: string;
}
interface ProposalType {
  id: string;
  hours: number;
  rate: number;
  urgency: boolean;
}
interface UserType {
  id: string;
  nome: string;
}
interface CategoryType {
  id: string;
  nome: string;
  icone: string;
}
interface ProposalDBType {
  id: string;
  id_prestacao_servico: string;
  preco_hora: number;
  horas_estimadas: number;
  estado: string;
  enabled: boolean;
}
//feth api /proposal/get-by-user-id/{idUser}
export const getProposal = async (idUser: string, token: string): Promise<ProposalType[]> => {
  const response = await fetch(`http://localhost:8080/proposal/get-by-user-id/${idUser}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
  if (response.status === 200){
    const data = await response.json()
    return data
  }
  return []
}


export default function ProposalReview(request: RequestProps) {
  const [isReviewing, setIsReviewing] = useState(false);
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const hours = request.proposal.hours
  const rate = request.proposal.rate;
  const urgency = request.proposal.urgency;
  const taxa = parseFloat(request.taxa);

  useEffect(() => {
    const { token, user } = parseCookies();
    if (!token || !user) {
      setProposals([]);
      return;
    }

    let parsedUser: { id?: string } = {};
    try {
      parsedUser = JSON.parse(user);
    } catch {
      setProposals([]);
      return;
    }

    if (!parsedUser.id) {
      setProposals([]);
      return;
    }

    void getProposal(parsedUser.id, token).then(setProposals);
  }, []);


  // Cálculo do Total
  const total = (parseFloat(hours.toString()) || 0) * (parseFloat(rate.toString()) || 0);
  const finalTotal = urgency ? total * 1.15 : total;

  return (
    <div className="max-w-full mx-auto p-8 bg-white border border-gray-200 rounded-3xl shadow-sm font-sans">
      <div className="flex justify-between mb-6 ">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Active Proposals</h2>
        <Link
          className="text-blue-600 font-semibold hover:underline whitespace-nowrap items-center"
          href=""
        >
          View All <ArrowRight className="ml-1 h-4 w-4 whitespace-nowrap" />
        </Link>
      </div>
      {/**map proposal data */} 
      {proposals.map((item: ProposalType) => (
      <Card key={item.id} className={`overflow-hidden transition-all duration-300 ${isReviewing ? 'ring-1 ring-blue-400 border-blue-200' : 'border-slate-200'}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-xl">
                <img src={request.category.icone} alt={request.category.nome} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{request.title}</h3>
                <p className="text-sm text-slate-500">
                  Requested by <span className="font-medium text-slate-700">{request.user.nome}</span>
                </p>
              </div>
            </div>
            {isReviewing ? (
              <Button
                onClick={() => setIsReviewing(false)}
                variant="secondary"
                className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1 font-bold">
                Drafting
              </Button>
            ) : (
              <Button
                onClick={() => setIsReviewing(true)}
                variant="secondary"
                className="bg-slate-100 hover:bg-slate-200 font-bold rounded-xl"
              >
                Review
              </Button>
            )}
          </div>
          {/* Editor proposal */}
          {isReviewing && (
            <div className="mt-8 pt-8 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2 mb-6 text-slate-800 font-semibold uppercase text-xs tracking-wider">
                <User className="h-4 w-4 text-slate-400" />
                Proposal Details
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                {/* Est. Hours */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Est. Hours
                  </label>
                  <div className="bg-slate-50 border-slate-200 focus-visible:ring-blue-400 font-semibold rounded-full text-center">
                    {request.proposal.hours}
                  </div>
                </div>

                {/* Rate */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-1">
                    <DollarSign className="h-3 w-3" /> Rate ($/hr)
                  </label>
                  <div className="bg-slate-50 border-slate-200 focus-visible:ring-blue-400 font-semibold rounded-full text-center">
                    {request.proposal.rate}
                  </div>
                </div>

                {/* Urgency Fee */}
                <div className="flex items-center space-x-2 pb-2">
                  <Checkbox
                    id="urgency"
                    checked={urgency}
                    className="border-slate-300 data-[state=checked]:bg-blue-600"
                  />
                  <label htmlFor="urgency" className="text-xs font-medium text-slate-600 leading-tight cursor-pointer">
                    Urgency Fee ({taxa}%) <br /><span className="text-blue-600 font-bold">Apply</span>
                  </label>
                </div>

                {/* Total Display */}
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Total</p>
                  <p className="text-3xl font-black text-slate-900">
                    ${finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      ))}
    </div>
  );
}
