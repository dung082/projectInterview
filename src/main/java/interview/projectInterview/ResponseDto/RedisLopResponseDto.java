package interview.projectInterview.ResponseDto;

import interview.projectInterview.Models.Lop;
import interview.projectInterview.Models.RedisLopModel;

import java.util.List;

public class RedisLopResponseDto<Lop> {
    private long totals;
    private List<Lop> results;
    public RedisLopResponseDto(long totals, List<Lop> results) {
        this.totals = totals;
        this.results = results;
    }

    public long getTotals() {
        return totals;
    }

    public void setTotals(long totals) {
        this.totals = totals;
    }

    public List<Lop> getResults() {
        return results;
    }

    public void setResults(List<Lop> results) {
        this.results = results;
    }
}
