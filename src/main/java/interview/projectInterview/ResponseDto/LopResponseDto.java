package interview.projectInterview.ResponseDto;

import interview.projectInterview.Models.Lop;

import java.util.List;

public class LopResponseDto<Lop> {
    private  long total;
    private List<Lop> results;

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List<Lop> getListLop() {
        return results;
    }

    public void setListLop(List<Lop> listLop) {
        this.results = listLop;
    }

    public LopResponseDto(long total, List<Lop> results) {
        this.total = total;
        this.results = results;
    }
}
