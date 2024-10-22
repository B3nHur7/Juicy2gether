import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { KeyRound } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ApiKeyManager() {
  const { apiKey, setApiKey } = useStore();
  const [tempKey, setTempKey] = useState(apiKey);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setApiKey(tempKey);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={apiKey ? 'outline' : 'default'}>
          <KeyRound className="mr-2 h-4 w-4" />
          {apiKey ? 'Update API Key' : 'Add API Key'}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Together AI API Key</DialogTitle>
          <DialogDescription>
            Enter your Together AI API key to start generating images. Your key is stored locally and never sent to any server.
          </DialogDescription>
        </DialogHeader>
        <Input
          value={tempKey}
          onChange={(e) => setTempKey(e.target.value)}
          placeholder="Enter your API key"
          type="password"
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}