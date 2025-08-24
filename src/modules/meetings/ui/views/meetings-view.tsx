'use client';

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

    return (
        <div>
            TODO: DATA TABLE
        </div>
    )
}

export const MeetingsViewLoading = () => {
    return (
        <LoadingState title="Meetings" description="Loading meetings..." />
    )
}

export const MeetingsViewError = () => {
    return (
        <ErrorState
            title='Error Loading'
            description='Something went wrong'
        />
    )
}