import ThemeProvider from "@/components/ui/ThemeProvider";
import "./globals.css"
import Tabs from "@/components/ui/Tabs";
import {Slot} from "expo-router";

export default function Layout() {
    return (
        <ThemeProvider>
            <Slot />
        </ThemeProvider>
    );
}
