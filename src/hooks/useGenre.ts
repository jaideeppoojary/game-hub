import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useData<Genre>('/genres');

export default useGenre;