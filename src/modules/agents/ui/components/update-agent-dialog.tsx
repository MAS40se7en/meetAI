import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialog {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues?: AgentGetOne
}

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValues
}: UpdateAgentDialog) => {
    return (
        <ResponsiveDialog
        title="Edit Agent"
        description="Edit the Agent details"
        open={open}
        onOpenChange={onOpenChange}
    >
        <AgentForm 
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValues}
        />
    </ResponsiveDialog>
    )
}