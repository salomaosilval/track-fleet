import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Header = () => {
  return (
    <>
      <div
        className="w-full py-3 px-8 text-lg font-semibold"
        style={{
          background: "var(--color-header-bg)",
          color: "var(--color-text)",
        }}
      >
        Salomão da Silva Leal
      </div>
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-4"
        style={{
          borderBottom: "2px solid var(--color-header-bg)",
        }}
      >
        <div className="flex items-center gap-6 w-full md:w-auto">
          <span className="text-2xl font-bold text-white tracking-tight">
            TrackFleet
          </span>
          <RadioGroup
            defaultValue="tracked"
            className="flex flex-row gap-4 ml-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="tracked"
                id="tracked"
                className="accent-[#00B4D8]"
              />
              <Label htmlFor="tracked" className="text-white cursor-pointer">
                Rastreados
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="others"
                id="others"
                className="accent-[#00B4D8]"
              />
              <Label htmlFor="others" className="text-white cursor-pointer">
                Outros
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
          <Input
            type="text"
            placeholder="Buscar por placa ou frota"
            className="rounded-md px-4 py-2 bg-[#000F17] text-white border border-[#22313F] focus:outline-none focus:ring-2 focus:ring-[#00B4D8] w-full md:w-64 placeholder:text-[#7B8A99]"
          />
          <Button className="ml-2 px-6 py-2 rounded-md bg-[#00B4D8] text-white font-semibold hover:bg-[#0096C7] transition-colors">
            Novo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
