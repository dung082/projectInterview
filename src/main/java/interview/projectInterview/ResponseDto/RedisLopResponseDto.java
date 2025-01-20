package interview.projectInterview.ResponseDto;

import interview.projectInterview.Models.RedisLopModel;

import java.util.List;

public class RedisLopResponseDto<RedisLopModel> {
    private long totals;
    private List<RedisLopModel> results;
    public RedisLopResponseDto(long totals, List<RedisLopModel> results) {
        this.totals = totals;
        this.results = results;
    }

    public long getTotals() {
        return totals;
    }

    public void setTotals(long totals) {
        this.totals = totals;
    }

    public List<RedisLopModel> getResults() {
        return results;
    }

    public void setResults(List<RedisLopModel> results) {
        this.results = results;
    }
}
