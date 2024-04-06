import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign } from 'lucide-react';

type cardProps = {
    cardTitle : String,
    cardContent : String,
    cardDescription : String
}

const SalesCard = ({cardContent,cardDescription,cardTitle}:cardProps) => {
    return (
        <Card className='mt-5 ' >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-md font-medium">
                   {cardTitle}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">${cardContent}</div>
                <p className="text-md text-muted-foreground">
                    {cardDescription}
                </p>
            </CardContent>
        </Card>
    )
}

export default SalesCard;
