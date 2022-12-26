import { useEffect, useState } from "react";
import { generateMiduPass } from "./modules/generatePass";
import { MainSection } from "./components/MainSection";
import { Card } from "./components/Card";
import { Brand } from "./components/Brand";
import { PassField } from "./components/PassField";
import { ToggleSwitch } from "./components//ToggleSwitch";
import { PasswordQuality } from "./components/PasswordQuality";
import { PassLengthLabel } from "./components/PassLengthLabel";
import { Slider } from "./components/Slider";
import { PrimaryButton } from "./components/PrimaryButton";
import { ReloadIcon } from "./icons/ReloadIcon";
import { ToggleLabel } from "./components/ToggleLabel";

function App() {
    const [password, setPassword] = useState("");
    const [passLength, setPassLength] = useState(23);
    const [lowercase, setLowercase] = useState(true);
    const [uppercase, setUppercase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(true);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const newPass = generateMiduPass(
            passLength,
            lowercase,
            uppercase,
            numbers,
            symbols
        );
        setPassword(newPass);
    }, [passLength, lowercase, uppercase, numbers, symbols, reload]);

    return (
        <MainSection>
            <Card>
                <Brand />
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <PassField value={password} setValue={setPassword} />
                        <PrimaryButton
                            disabled={!password}
                            handleClick={() => setReload(!reload)}
                        >
                            <ReloadIcon />
                        </PrimaryButton>
                    </div>
                    <PasswordQuality length={passLength} min={6} max={66} />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <PassLengthLabel length={passLength} />
                        <Slider
                            value={passLength}
                            handleChange={(event) =>
                                setPassLength(event.target.value)
                            }
                            min={6}
                            max={66}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <ToggleLabel
                            content="Include lowercase characters"
                            active={lowercase}
                        />
                        <ToggleSwitch
                            active={lowercase}
                            handleClick={() => setLowercase(!lowercase)}
                            disabled={!uppercase && !numbers && !symbols}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <ToggleLabel
                            content="Include uppercase characters"
                            active={uppercase}
                        />
                        <ToggleSwitch
                            active={uppercase}
                            handleClick={() => setUppercase(!uppercase)}
                            disabled={!lowercase && !numbers && !symbols}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <ToggleLabel
                            content="Include numbers"
                            active={numbers}
                        />
                        <ToggleSwitch
                            active={numbers}
                            handleClick={() => setNumbers(!numbers)}
                            disabled={!lowercase && !uppercase && !symbols}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <ToggleLabel
                            content="Include symbols"
                            active={symbols}
                        />
                        <ToggleSwitch
                            active={symbols}
                            handleClick={() => setSymbols(!symbols)}
                            disabled={!lowercase && !uppercase && !numbers}
                        />
                    </div>
                </div>
            </Card>
            <span className="text-slate-300 text-sm">
                Developed by{" "}
                <a
                    className="text-orange-500 font-medium no-underline hover:underline"
                    href="https://github.com/devenapuros"
                >
                    @devenapuros
                </a>
            </span>
        </MainSection>
    );
}

export default App;
