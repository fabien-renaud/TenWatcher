export interface Data {
  datasets: Datasets[];
  labels: string[]
}

export interface Datasets {
  data: string[];
  label: string;
}
